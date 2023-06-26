import { Modal } from "react-bootstrap";

const AuthorModal = ({ author, books, onClose }) => {
  return (
    <Modal show={!!author} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Books by {author}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>Language: {book.language}</p>
            <p>Page Count: {book.pageCount}</p>
            {/* Render additional book details */}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthorModal;
