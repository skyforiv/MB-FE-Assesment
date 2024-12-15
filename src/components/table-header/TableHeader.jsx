import React, { useState } from "react";
import "./TableHeader.css";

const TableHeader = ({
  headerContextList = [],
  onFilter = (key, value) => {},
  onSort = (key, newDirection) => {},
  onToggle = (toggleState) => {},
}) => {
  const [filters, setFilters] = useState({});
  const [sortState, setSortState] = useState({ key: "", direction: "" });
  const [isGridView, setIsGridView] = useState(false);

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    onFilter(key, value);
  };

  const handleClearFilter = (key) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[key];
      return updatedFilters;
    });
    onFilter(key, ""); // Filtreyi sıfırla
  };

  const handleSort = (key) => {
    const newDirection =
      sortState.key === key && sortState.direction === "asc" ? "desc" : "asc";
    setSortState({ key, direction: newDirection });
    onSort(key, newDirection);
  };

  const toggleView = () => {
    setIsGridView((prev) => !prev); // Görünümü değiştiren fonksiyon
    onToggle(isGridView ? "row" : "grid");
  };

  return (
    <>
      <div className="view-toggle">
        <button onClick={toggleView} className="view-toggle-btn">
          <div className="icon-container">
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
                      <option value="Mythological Creature">Mythological Creature</option>
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