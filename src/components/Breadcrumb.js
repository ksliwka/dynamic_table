const Breadcrumb = ({ path }) => {
  return (
    <div>
      {path.map((folder, index) => (
        <span key={index}>
          {folder}
          {index < path.length - 1 ? " > " : ""}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
