import Books from "./Books";

const BooksList = ({ books }) => {
    if (!books) {
      return null;
    }
  
    return (
      <ul>
        {books.map((book) => (
          <Books key={book.id} title={book.title} />
        ))}
      </ul>
    );
  };

export default BooksList;
