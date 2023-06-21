const Breadcrumb = ({ path, onBreadcrumbClick }) => {
  return (
    <div>
      {path.map((book, index) => (
        <span key={index}>
          <button onClick={() => onBreadcrumbClick(index)}>{book.title}</button>
          {index < path.length - 1 ? " > " : ""}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
