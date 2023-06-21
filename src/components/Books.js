
const Books = ({ book, isSelected, onRowClick }) => {

  const handleRowClick = () => {
    onRowClick(book);
  };

  return (
    <tr className={isSelected ? "selected" : ""} onClick={handleRowClick}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.authors}</td>
    </tr>
  );
};

export default Books;
