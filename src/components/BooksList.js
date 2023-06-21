import Books from "./Books";
import { useState } from "react";

const BooksList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  if (!books) {
    return null;
  }
  const handleRowClick = (book) => {
    if (selectedBook === book) {
      setSelectedBook(null);
    } else {
      setSelectedBook(book);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <Books
              key={book.id}
              book={book}
              isSelected={selectedBook === book}
              onRowClick={handleRowClick}
            />
          ))}
        </tbody>
      </table>
      {selectedBook && (
        <div>
          <h2>Selected Book Details</h2>
          <p>ID: {selectedBook.id}</p>
          <p>Title: {selectedBook.title}</p>
          <p>Authors: {selectedBook.authors}</p>
          <p>Self Link: {selectedBook.selfLink}</p>
          <p>Page Count: {selectedBook.pageCount}</p>
        </div>
      )}
    </div>
  );
};

export default BooksList;
