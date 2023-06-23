import classes from "./BooksList.module.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Books = ({ book, isSelected, onRowClick }) => {
  const handleRowClick = () => {
    onRowClick(book);
  };

  return (
    <>
      <tr
        className={`${isSelected ? "selected" : ""} ${classes.row}`}
        onClick={handleRowClick}
      >
        <td>{book.title}</td>
        <td>{book.authors}</td>
        <td>
          {isSelected ? (
            <AiOutlineArrowUp className={classes.arrow}/>
          ) : (
            <AiOutlineArrowDown className={classes.arrow} />
          )}
        </td>
      </tr>
      {isSelected && (
        <tr className={` ${classes.selectedDetails}`}>
          <td colSpan={3}>
            <div>
              <h2>Selected Book Details</h2>
              <p>ID: {book.id}</p>
              <p>Title: {book.title}</p>
              <p>Authors: {book.authors}</p>
              <p>Self Link: {book.selfLink}</p>
              <p>Page Count: {book.pageCount}</p>
              <img src={book.imageLinks} alt="Book Cover" />
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default Books;
