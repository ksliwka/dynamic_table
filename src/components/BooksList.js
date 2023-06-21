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
          <th>selfLink</th>
          <th>pageCount</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <Books key={book.id} book={book} index={index}/>
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
