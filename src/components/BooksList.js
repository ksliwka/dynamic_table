import Books from "./Books";

const BooksList = ({ books }) => {
  if (!books) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Authors</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Books key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
