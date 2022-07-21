import React from "react";

const Pagination = ({ page, pages, handlePage }) => {
  page++;
  pages++;
  let form = {};
  if (page < 3) {
    form.position = "start";
    form.pages = [1, 2, 3];
  } else if (page > pages - 2) {
    form.position = "end";
    form.pages = [pages - 2, pages - 1, pages];
  } else {
    form.position = "center";
    form.pages = [page - 1, page, page + 1];
  }

  return (
    <div className="pagination">
      {(form.position === "end" || form.position === "center") && (
        <div onClick={() => handlePage(0)}>1</div>
      )}
      {(form.position === "end" || form.position === "center") && (
        <span>...</span>
      )}
      {form.pages.map((p) => (
        <div
          key={p}
          onClick={() => handlePage(p - 1)}
          style={{ backgroundColor: page === p ? "#b3d1ff" : "white" }}
        >
          {p}
        </div>
      ))}
      {(form.position === "start" || form.position === "center") && (
        <span>...</span>
      )}
      {(form.position === "start" || form.position === "center") && (
        <div onClick={() => handlePage(pages - 1)}>{pages}</div>
      )}
    </div>
  );
};

export default Pagination;
