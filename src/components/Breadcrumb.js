import classes from "./BreadCrumb.module.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Breadcrumb = ({ path, onBreadcrumbClick }) => {
  return (
    <div className={classes.breadcrumb}>
      {path.map((book, index) => (
        <span key={index}>
          <button
            onClick={() => onBreadcrumbClick(index)}
            className={classes.button}
          >
            {book.title}
          </button>
          {index < path.length - 1 ? (
            <MdOutlineArrowForwardIos className={classes.arrow} />
          ) : (
            ""
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
