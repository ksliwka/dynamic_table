import Books from "./Books";
import { Fragment, useState, useRef, useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import { Container } from "react-bootstrap";
import classes from "./BooksList.module.css";
import { gsap } from "gsap";
import AuthorModal from "./AuthorModal";

const BooksList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedPath, setSelectedPath] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const bookRef = useRef(null);

  useEffect(() => {
    const book = bookRef.current;
    gsap.fromTo(
      book,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.easeOut",
        delay: 1,
      }
    );
  }, []);

  if (!books) {
    return null;
  }
  const handleRowClick = (book) => {
    if (selectedBook === book) {
      setSelectedBook(null);
      setSelectedPath([]);
    } else {
      setSelectedBook(book);
      const bookPath = [...selectedPath, book];
      setSelectedPath(bookPath);
    }
  };

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
  };

  const handleBreadcrumbClick = (index) => {
    const bookPath = selectedPath.slice(0, index + 1);
    setSelectedPath(bookPath);
    setSelectedBook(bookPath[index]);
  };

  const handleCloseModal = () => {
    setSelectedAuthor(null);
  };

  const getBooksByAuthor = (author) => {
    return books.filter((book) => book.authors.includes(author));
  };

  return (
    <Container>
      <div>
        <h1 className={classes.title} ref={bookRef}>
          BOOKS
        </h1>
        <Breadcrumb
          path={selectedPath}
          onBreadcrumbClick={handleBreadcrumbClick}
        />
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <Books
                key={book.id}
                book={book}
                isSelected={selectedBook === book}
                onRowClick={handleRowClick}
                onAuthorClick={handleAuthorClick}
              />
            ))}
          </tbody>
        </table>
        <AuthorModal
          author={selectedAuthor}
          books={getBooksByAuthor(selectedAuthor)}
          onClose={handleCloseModal}
        />
      </div>
    </Container>
  );
};

export default BooksList;
