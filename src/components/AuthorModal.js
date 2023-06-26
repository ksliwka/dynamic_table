import { Modal, Row, Col, Spinner } from "react-bootstrap";
import classes from "./AuthorModal.module.css";

const AuthorModal = ({ author, books, isLoading, onClose }) => {
  return (
    <Modal show={!!author} onHide={onClose} className={classes.modal} size="lg">
    <Modal.Header closeButton>
      <Modal.Title className={classes.title}>Books by {author}</Modal.Title>
    </Modal.Header>
    <Modal.Body className={classes.body}>
      {isLoading ? (
        <div className={classes.loading}>
          <Spinner animation="border" role="status" className={classes.spinner}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        books.map((book) => (
          <div key={book.id}>
            <Row className="mb-4">
              <Col sm={2} className="me-4">
                <img src={book.imageLinks} alt={book.title} />
              </Col>
              <Col>
                <h3>{book.title}</h3>
                <p className="text-muted">Language: {book.language}</p>
                <p className="text-muted">Category: {book.categorie}</p>
                <p className="text-muted">Published date: {book.publishedDate}</p>
                <a href={book.infoLink} className={classes.link}>
                  More info
                </a>
              </Col>
            </Row>
          </div>
        ))
      )}
    </Modal.Body>
    <Modal.Footer>
      <button onClick={onClose} className={classes.closeButton}>
        Close
      </button>
    </Modal.Footer>
  </Modal>
  );
};

export default AuthorModal;
