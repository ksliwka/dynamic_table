import classes from "./BooksList.module.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";

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
            <AiOutlineArrowUp className={classes.arrow} />
          ) : (
            <AiOutlineArrowDown className={classes.arrow} />
          )}
        </td>
      </tr>
      {isSelected && (
        <tr className={` ${classes.selectedDetails}`}>
          <td colSpan={3}>
            <div>
              <Container>
                <Row>
                  <Col>
                    <h2>{book.title}</h2>
                    <Row>
                      <Col>
                        <p>{book.authors}</p>
                        <p>Language: {book.language}</p>
                        <p>Page Count: {book.pageCount}</p>
                      </Col>
                      <Col>
                        <p>Categorie: {book.categorie}</p>
                        <p>Published Date: {book.publishedDate}</p>
                        <a href={book.infoLink}>More info</a>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <img src={book.imageLinks} alt="Book Cover" />
                  </Col>
                </Row>
                <Row>
                  <p>Description: {book.description}</p>
                </Row>
              </Container>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default Books;
