import classes from "./BreadCrumb.module.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

const Breadcrumb = ({ path, onBreadcrumbClick, selectedBookRef  }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const breadcrumbRef = useRef(null);

  useEffect(() => {
    if (activeIndex !== null && breadcrumbRef.current && selectedBookRef.current) {
      if (activeIndex === path.length - 1) {
        // Scroll to the selected book when the last breadcrumb is clicked
        selectedBookRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Scroll to the breadcrumb when it is clicked
        breadcrumbRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [activeIndex, path.length, selectedBookRef]);

  const handleBreadcrumbClick = (index) => {
    setActiveIndex(index);
    onBreadcrumbClick(index);
  };

  return (
    <div className={classes.breadcrumb}>
      {path.map((book, index) => (
        <span key={index}>
          <button
            onClick={() => handleBreadcrumbClick(index)}
            className={`${classes.button} ${
              index === path.length - 1 ? classes.lastTitle : ""
            }`}
            ref={index === activeIndex ? breadcrumbRef : null}
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
