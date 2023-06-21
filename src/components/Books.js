

const Books = ({book}) => {
    return (
        <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.authors}</td>
      </tr>
    );
  };
  

export default Books;