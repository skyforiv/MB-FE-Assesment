import React from "react";
import "./PagingComponent.css";

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
  // Sayfa numarası 1'in altına düşmesin
  if (startPage < 1) {
    startPage = 1; 
  }

  // Gösterilecek sayfa numarası butonları için dizi oluştur
  const pages = Array.from({ length: 5 }, (_, i) => startPage + i);

  return (
    <div className="paging-container">
      <button
        onClick={prevPage}
        disabled={currentPage <= 1} // Eğer birinci sayfadaysak buton devre dışı
        className="paging-button"
      >
        <i className="fas fa-arrow-left"></i> 
        Previous
      </button>

      {/* Sayfa Numaraları */}
      {pages.map((pageNum) => (
        <div key={pageNum}>
          {pageNum <= pageCount && ( // Eğer sayfa toplam sayfa sayısını geçmiyorsa
            <button
              onClick={() => setPage(pageNum)} // Sayfa numarasına tıklandığında ilgili sayfaya git
              className={`paging-number ${
                pageNum === currentPage ? "active" : "" // Mevcut sayfadaysak buton aktif görünsün
              }`}
            >
              {pageNum}
            </button>
          )}
        </div>
      ))}

      <button
        onClick={nextPage}
        disabled={currentPage >= pageCount} // Eğer son sayfadaysak buton devre dışı
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
          setPage(1); // Sayfa boyutu değiştiğinde ilk sayfaya git
          setPageSize(Number.parseInt(e.target.value)); // Yeni sayfa boyutunu ayarla
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