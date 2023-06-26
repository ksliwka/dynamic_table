import React, { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./BooksList.module.css";

const Books = forwardRef(({ book, isSelected, onRowClick, onAuthorClick }, ref) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const rowElement = rowRef.current;
    gsap.fromTo(
      rowElement,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.1, ease: "back", delay: 1 }
    );
  }, []);

  const handleRowClick = () => {
    onRowClick(book);
  };

  const handleAuthorClick = (event) => {
    event.stopPropagation();
    onAuthorClick(book.authors[0]);
  };

  return (
    <>
      <tr
        className={`${isSelected ? "selected" : ""} ${classes.row}`}
        onClick={handleRowClick}
        ref={ref || rowRef}
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
                <h2>{book.title}</h2>
                <Row>
                  <Col>
                    <Row className="mb-4">
                      <Col sm={4} md={3} lg={2}>
                        <img src={book.imageLinks} alt="Book Cover" />
                      </Col>
                      <Col sm={3} md={3}>
                        <p
                          onClick={handleAuthorClick}
                          className={classes.authorLink}
                        >
                          {book.authors}
                        </p>
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
});

export default Books;
