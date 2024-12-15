import React from "react";
import "./PagingComponent.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
function PagingComponent({
  currentPage,
  nextPage,
  prevPage,
  setPage,
  pageCount = 0,
  pageSize,
  setPageSize,
  rowCount,
}) {
  let startPage = currentPage - 2;
  if (startPage < 1) {
    startPage = 1;
  }

  const pages = Array.from({ length: 5 }, (_, i) => startPage + i);

  return (
    <div className="paging-container">
      <button
        onClick={prevPage}
        disabled={currentPage <= 1}
        className="paging-button"
      >
        <i className="fas fa-arrow-left"></i> 
        Previous
      </button>

      {/* Sayfa Numaraları */}
      {pages.map((pageNum) => (
        <div key={pageNum}>
          {pageNum <= pageCount && (
            <button
              onClick={() => setPage(pageNum)}
              className={`paging-number ${
                pageNum === currentPage ? "active" : ""
              }`}
            >
              {pageNum}
            </button>
          )}
        </div>
      ))}

      <button
        onClick={nextPage}
        disabled={currentPage >= pageCount}
        className="paging-button"
      >
        Next
        <i className="fas fa-arrow-right"></i> 
      </button>

      {/* Sayfa Boyutu Seçim Kutusu */}
      <select
        name="pageSize"
        id="pageSize"
        onChange={(e) => {
          setPage(1);
          setPageSize(Number.parseInt(e.target.value));
        }}
        className="paging-select"
      >
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={150}>150</option>
        <option value={200}>200</option>
      </select>
    </div>
  );
}

export default PagingComponent;
