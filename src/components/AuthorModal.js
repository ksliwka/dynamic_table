import { Modal, Row, Col } from "react-bootstrap";
import classes from "./AuthorModal.module.css";

const AuthorModal = ({ author, books, onClose }) => {
  return (
    <Modal show={!!author} onHide={onClose} className={classes.modal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className={classes.title}>Books by {author}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.body}>
        {books.map((book) => (
          <div key={book.id}>
            <Row className="mb-4">
              <Col sm={2} className='me-4'>
                <img src={book.imageLinks}></img>
              </Col>
              <Col>
                <h3>{book.title}</h3>
                <p className="text-muted">Language: {book.language}</p>
                <p className="text-muted">Categorie: {book.categorie}</p>
                <p className="text-muted">Published date: {book.publishedDate}</p>
              </Col>
            </Row>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose} className={classes.closeButton}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthorModal;
