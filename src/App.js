import "./App.css";
import { useState, useEffect, useCallback, Fragment } from "react";
import BooksList from "./components/BooksList";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchBooks = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=free-ebooks&orderBy=newest&maxResults=40&key=${apiKey}`
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
          description: bookData.volumeInfo.description,
          language: bookData.volumeInfo.language,
          infoLink: bookData.volumeInfo.infoLink,
          categorie: bookData.volumeInfo.categories,
          publishedDate: bookData.volumeInfo.publishedDate,
          selfLink: bookData.selfLink,
          pageCount: bookData.volumeInfo.pageCount,
          imageLinks: bookData.volumeInfo.imageLinks.thumbnail,
        };
      });

      setBooks(transformedBooks);
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [apiKey]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const fetchMoreBooks = useCallback(async () => {
    setIsLoadingMore(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=free-ebooks&orderBy=newest&maxResults=40&startIndex=${books.length}&key=${apiKey}`
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
          description: bookData.volumeInfo.description,
          language: bookData.volumeInfo.language,
          infoLink: bookData.volumeInfo.infoLink,
          categorie: bookData.volumeInfo.categories,
          publishedDate: bookData.volumeInfo.publishedDate,
          selfLink: bookData.selfLink,
          pageCount: bookData.volumeInfo.pageCount,
          imageLinks: bookData.volumeInfo.imageLinks.thumbnail,
        };
      });

      setBooks((prevBooks) => {
        const uniqueBooks = transformedBooks.filter(
          (book) => !prevBooks.find((prevBook) => prevBook.id === book.id)
        );
        return [...prevBooks, ...uniqueBooks];
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [books.length, apiKey]);

  let content = <p>Found no books.</p>;

  if (books.length > 0) {
    content = (
      <Fragment>
        <BooksList books={books} fetchMoreBooks={fetchMoreBooks} />
        {isLoadingMore && <p>Loading...</p>}
      </Fragment>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <Fragment>
      {isLoading && (
        <div className="empty-rectangle">
          <p className="loading">Loading...</p>
        </div>
      )}
      <div className={`content ${isLoading ? "content-hidden" : ""}`}>
        {content}
      </div>
    </Fragment>
  );
}

export default App;
