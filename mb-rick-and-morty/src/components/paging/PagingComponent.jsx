import React from 'react';


function PagingComponent({ currentPage, nextPage, prevPage, setPage, pageCount = 0 }) {
  // Gösterilecek sayfa numaralarını hesapla
  let startPage = currentPage - 2;
  if (startPage < 1) {
    startPage = 1;
  }

  const pages = Array.from({ length: 5 }, (_, i) => startPage + i);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Geri Butonu */}
      <button onClick={prevPage} disabled={currentPage <= 1}>
        Geri
      </button>

      {/* Sayfa Numaraları */}
      {pages.map(pageNum => (
        <div key={pageNum}>
        {
          pageNum <= pageCount &&
        (<button
          onClick={() => setPage(pageNum)}
          style={{
            fontWeight: pageNum === currentPage ? 'bold' : 'normal',
            backgroundColor: pageNum === currentPage ? '#eee' : 'transparent'
          }}
        >
          {pageNum}
        </button>)
        }
        </div>
      ))}

      {/* İleri Butonu */}
      <button onClick={nextPage} disabled = {currentPage >= pageCount}>
        İleri
      </button>
    </div>
  );
}

export default PagingComponent;