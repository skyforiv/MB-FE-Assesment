import React, { useState } from "react";
import "./TableHeader.css";

const TableHeader = ({
  headerContextList = [], // Başlık verilerini liste olarak alır
  onFilter = (key, value) => {}, // Filtreleme işlemi için callback fonksiyonu
  onSort = (key, newDirection) => {}, // Sıralama işlemi için callback fonksiyonu
  onToggle = (toggleState) => {}, // Görünüm değiştirme işlemi için callback fonksiyonu
}) => {
  const [filters, setFilters] = useState({}); // Uygulanan filtreleri saklar
  const [sortState, setSortState] = useState({ key: "", direction: "" }); // Sıralama durumu
  const [isGridView, setIsGridView] = useState(false); // Grid ve satır görünümü arasında geçiş

  const handleFilterChange = (key, value) => {
    // Filtre değişimlerini işler
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    onFilter(key, value); // propstan gelen Callback ile dışarıya bildir
  };

  const handleClearFilter = (key) => {
    // Belirli bir filtreyi temizler
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[key];
      return updatedFilters;
    });
    onFilter(key, ""); // Filtreyi sıfırla
  };

  const handleSort = (key) => {
    // Sıralama yönünü değiştir
    const newDirection =
      sortState.key === key && sortState.direction === "asc" ? "desc" : "asc";
    setSortState({ key, direction: newDirection });
    onSort(key, newDirection); // Yeni sıralama durumu callback ile bildir
  };

  const toggleView = () => {
    // Görünümü değiştir grid veya row
    setIsGridView((prev) => !prev);
    onToggle(isGridView ? "row" : "grid");
  };

  return (
    <>
      <div className="view-toggle">
        <button onClick={toggleView} className="view-toggle-btn">
          <div className="icon-container">
            {/* Grid ve satır görünümü ikonları */}
            <i
              className={`fas fa-border-all ${isGridView ? "active" : ""}`}
              aria-label="Grid View"
            ></i>
            <i
              className={`fas fa-stream ${!isGridView ? "active" : ""}`}
              aria-label="Row View"
            ></i>
          </div>
        </button>
      </div>
      <div className="table-header">
        {headerContextList.map((column) => (
          <div key={column.key} className="table-header-cell">
            <div
              className={`header-label ${column.sortable ? "sortable" : ""}`}
              onClick={() => column.sortable && handleSort(column.key)}
            >
              {column.label}
              {column.sortable && (
                <span className="sort-icon">
                  {/* Sıralama ikonları */}
                  {sortState.key === column.key ? (
                    sortState.direction === "asc" ? (
                      <i className="fas fa-sort-up"></i>
                    ) : (
                      <i className="fas fa-sort-down"></i>
                    )
                  ) : (
                    <i className="fas fa-sort"></i>
                  )}
                </span>
              )}
            </div>

            {column.filterable && (
              <div className="filter-container">
                {/* Status filtresi */}
                {column.key === "status" && (
                  <div className="filter-wrapper">
                    <select
                      className="filter-select"
                      value={filters[column.key] || ""}
                      onChange={(e) =>
                        handleFilterChange(column.key, e.target.value)
                      }
                    >
                      <option value="">All</option>
                      <option value="Alive">Alive</option>
                      <option value="Dead">Dead</option>
                      <option value="unknown">Unknown</option>
                    </select>
                    {filters[column.key] && (
                      <button
                        className="clear-filter-btn"
                        onClick={() => handleClearFilter(column.key)}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                )}
                {/* Gender filtresi */}
                {column.key === "gender" && (
                  <div className="filter-wrapper">
                    <select
                      className="filter-select"
                      value={filters[column.key] || ""}
                      onChange={(e) =>
                        handleFilterChange(column.key, e.target.value)
                      }
                    >
                      <option value="">All</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Genderless">Genderless</option>
                      <option value="unknown">Unknown</option>
                    </select>
                    {filters[column.key] && (
                      <button
                        className="clear-filter-btn"
                        onClick={() => handleClearFilter(column.key)}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                )}
                {/* Tür (species) filtresi */}
                {column.key === "species" && (
                  <div className="filter-wrapper">
                    <select
                      className="filter-select"
                      value={filters[column.key] || ""}
                      onChange={(e) =>
                        handleFilterChange(column.key, e.target.value)
                      }
                    >
                      <option value="">All</option>
                      <option value="Human">Human</option>
                      <option value="Alien">Alien</option>
                      <option value="Humanoid">Humanoid</option>
                      <option value="Poopybutthole">Poopybutthole</option>
                      <option value="Mythological Creature">
                        Mythological Creature
                      </option>
                      <option value="Animal">Animal</option>
                      <option value="Disease">Disease</option>
                      <option value="Robot">Robot</option>
                      <option value="Cronenberg">Cronenberg</option>
                      <option value="unknown">Unknown</option>
                    </select>
                    {filters[column.key] && (
                      <button
                        className="clear-filter-btn"
                        onClick={() => handleClearFilter(column.key)}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                )}
                {/* Diğer filtreler */}
                {column.key !== "status" &&
                  column.key !== "gender" &&
                  column.key !== "species" && (
                    <div className="filter-wrapper">
                      <input
                        type="text"
                        className="filter-input"
                        value={filters[column.key] || ""}
                        onChange={(e) =>
                          handleFilterChange(column.key, e.target.value)
                        }
                        placeholder="Filter..."
                      />
                      {filters[column.key] && (
                        <button
                          className="clear-filter-btn"
                          onClick={() => handleClearFilter(column.key)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      )}
                    </div>
                  )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TableHeader;