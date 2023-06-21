import { useState } from "react";

const Books = ({ book, index }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = () => {
    if (selectedRow === index) {
      setSelectedRow(null); 
    } else {
      setSelectedRow(index);
    }
  };

  return (
    <tr
      className={selectedRow === index ? "selected" : ""}
      onClick={() => handleRowClick(index)}
    >
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.authors}</td>
      <td>{book.selfLink}</td>
      <td>{book.pageCount}</td>
    </tr>
  );
};

export default Books;
