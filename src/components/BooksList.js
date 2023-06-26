import Books from "./Books";
import { useState, useRef, useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import { Container } from "react-bootstrap";
import classes from "./BooksList.module.css";
import { gsap } from "gsap";
import AuthorModal from "./AuthorModal";

const BooksList = ({ books, fetchMoreBooks }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedPath, setSelectedPath] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [authorBooks, setAuthorBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

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
    fetchAuthorBooks(author);
  };

  const handleBreadcrumbClick = (index) => {
    const bookPath = selectedPath.slice(0, index + 1);
    setSelectedPath(bookPath);
    setSelectedBook(bookPath[index]);
  };

  const handleCloseModal = () => {
    setSelectedAuthor(null);
    setAuthorBooks([]);
  };

  const fetchAuthorBooks = async (author) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&orderBy=newest&maxResults=40&key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedBooks = data.items.map((bookData) => {
        return {
          id: bookData.id,
          title: bookData.volumeInfo.title,
          authors: bookData.volumeInfo.authors,
          language: bookData.volumeInfo.language,
          infoLink: bookData.volumeInfo.infoLink,
          categorie: bookData.volumeInfo.categories,
          publishedDate: bookData.volumeInfo.publishedDate,
          imageLinks: bookData.volumeInfo.imageLinks?.thumbnail,
        };
      });

      setAuthorBooks(transformedBooks);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
          isLoading={isLoading}
          author={selectedAuthor}
          books={authorBooks}
          onClose={handleCloseModal}
        />
        {isLoading && <p>Loading...</p>}
      </div>
      <button onClick={fetchMoreBooks} className={classes.moreBtn}>Load more</button>
    </Container>
  );
};

export default BooksList;
