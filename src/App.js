import "./App.css";
import { useState, useEffect, useCallback, Fragment } from "react";
import BooksList from "./components/BooksList";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=free-ebooks&key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedBooks = data.items.map((bookData) => {
        return {
          id: bookData.id,
          title: bookData.volumeInfo.title,
          authors: bookData.volumeInfo.authors,
          selfLink: bookData.selfLink,
          pageCount: bookData.volumeInfo.pageCount,
          imageLinks: bookData.volumeInfo.imageLinks.thumbnail,
        };
      });
      setBooks(transformedBooks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  let content = <p>Found no books.</p>;

  if (books.length > 0) {
    content = <BooksList books={books} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return <Fragment>{content}</Fragment>;
}

export default App;
