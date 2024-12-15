import React, { useState } from "react";
import "./CharacterList.css";
import CharacterRow from "../../components/character-row/CharacterRow";
import CharacterCard from "../../components/character-card/CharacterCard"; // import CharacterCard component
import PagingComponent from "../../components/paging/PagingComponent";
import TableHeader from "../../components/table-header/TableHeader";

const tableHeaderContext = [
  { label: "ID", key: "id", sortable: true, filterable: false },
  { label: "Name", key: "name", sortable: true, filterable: true },
  {
    label: "Status",
    key: "status",
    sortable: true,
    filterable: true,
    options: ["Alive", "Dead", "Unknown"],
  },
  { label: "Species", key: "species", sortable: true, filterable: true },
  {
    label: "Gender",
    key: "gender",
    sortable: true,
    filterable: true,
    options: ["Male", "Female", "Genderless", "Unknown"],
  },
];

const CharacterList = ({ characterState }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [filter, setFilter] = useState({
    id: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });
  const [sort, setSort] = useState({key:'', direction:''});
  const [viewType, setViewType] = useState("row"); 

  function applyFilter(data) {
    return data.filter((character) => {
      const nameMatch = filter.name
        ? character.name.toLowerCase().includes(filter.name.toLowerCase())
        : true;
      const statusMatch = filter.status
        ? character.status === filter.status
        : true;
      const speciesMatch = filter.species
        ? character.species === filter.species
        : true;
      const typeMatch = filter.type
        ? character.type.toLowerCase().includes(filter.type.toLowerCase())
        : true;
      const genderMatch = filter.gender
        ? character.gender === filter.gender
        : true;
      return (
        nameMatch && statusMatch && speciesMatch && typeMatch && genderMatch
      );
    });
  }

  function applySort(data) {
    if (!sort || !sort.key) return data;
    return [...data].sort((a, b) => {
      if (a[sort.key] < b[sort.key]) return sort.direction === "asc" ? -1 : 1;
      if (a[sort.key] > b[sort.key]) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  const getCurrentCharacterList = () => {
    const currentPageIdx = currentPage - 1;
    const filteredData = applyFilter(characterState?.result?.results || []);
    const sortedData = applySort(filteredData);
    return sortedData.slice(
      currentPageIdx * pageSize,
      currentPageIdx * pageSize + pageSize
    );
  };

  const currentCharacterList = getCurrentCharacterList();

  return (
    <div className="character-list-container">
      {characterState.loading ? (
        <div>Yükleniyor...</div>
      ) : (
        characterState.result && (
          <div>
            <TableHeader
              headerContextList={tableHeaderContext}
              onFilter={(key, value) => {
                setCurrentPage(1);
                setFilter({ ...filter, [key]: value });
              }}
              onSort={(key) => {
                setCurrentPage(1);
                setSort((prevSort) => {
                  const isSameKey = prevSort && prevSort.key === key;
                  const newDirection =
                    isSameKey && prevSort.direction === "asc" ? "desc" : "asc";
                  return { key, direction: newDirection };
                });
              }}
              onToggle={setViewType}
            />
            {!characterState?.result?.results ||
            currentCharacterList.length === 0 ? (
              <div>No results found.</div>
            ) : (
              <div
                className={viewType === "grid" ? "grid-layout" : "row-layout"}
              >
                {currentCharacterList.map((character) =>
                  viewType === "grid" ? (
                    <CharacterCard key={character.id} {...character} />
                  ) : (
                    <CharacterRow key={character.id} {...character} />
                  )
                )}
              </div>
            )}
            <PagingComponent
              currentPage={currentPage}
              pageCount={Math.ceil(
                applyFilter(characterState?.result?.results).length / pageSize
              )}
              nextPage={() => {
                if (
                  currentPage <
                  Math.ceil(
                    applyFilter(characterState.result.results).length / pageSize
                  )
                )
                  setCurrentPage(currentPage + 1);
              }}
              prevPage={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
              setPage={setCurrentPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
              rowCount={applyFilter(characterState.result.results).length}
            />
          </div>
        )
      )}
      {!!characterState?.error?.message && <div>Oops bir hata oluştu</div>}
    </div>
  );
};

export default CharacterList;
