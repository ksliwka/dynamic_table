import Books from "./Books";
import { Fragment, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { Container } from "react-bootstrap";
import classes from "./BooksList.module.css";

const BooksList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedPath, setSelectedPath] = useState([]);

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

  const handleBreadcrumbClick = (index) => {
    const bookPath = selectedPath.slice(0, index + 1);
    setSelectedPath(bookPath);
    setSelectedBook(bookPath[index]);
  };

  return (

      <Container>
        <div>
          <h1 className={classes.title}>BOOKS</h1>
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
                />
              ))}
            </tbody>
          </table>
        </div>
      </Container>

  );
};

export default BooksList;
