import React, { useState } from "react";
import "./CharacterList.css";
import CharacterRow from "../../components/character-row/CharacterRow";
import CharacterCard from "../../components/character-card/CharacterCard"; 
import PagingComponent from "../../components/paging/PagingComponent";
import TableHeader from "../../components/table-header/TableHeader";

//Table header için her bir kolonu ve bu kolonlardaki verilerin filtre, sıralama bilgilerini içeren değişken
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
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa state
  const [pageSize, setPageSize] = useState(20); // Sayfa başına karakter sayısı
  const [filter, setFilter] = useState({
    id: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  }); // Filtre state
  const [sort, setSort] = useState({ key: "", direction: "" }); // Sıralama state
  const [viewType, setViewType] = useState("row"); // Görünüm tipi: grid veya row

  function applyFilter(data) {
    // Filtreleme fonksiyonu
    return data.filter((character) => {
      const nameMatch = filter.name
        ? character.name.toLowerCase().includes(filter.name.toLowerCase())
        : true; // İsim filtresi
      const statusMatch = filter.status
        ? character.status === filter.status
        : true; // Durum filtresi
      const speciesMatch = filter.species
        ? character.species === filter.species
        : true; // Tür filtresi
      const typeMatch = filter.type
        ? character.type.toLowerCase().includes(filter.type.toLowerCase())
        : true; // Tip filtresi
      const genderMatch = filter.gender
        ? character.gender === filter.gender
        : true; // Cinsiyet filtresi
      return (
        nameMatch && statusMatch && speciesMatch && typeMatch && genderMatch
      );
    });
  }

  function applySort(data) {
    // Sıralama fonksiyonu
    if (!sort || !sort.key) return data;
    return [...data].sort((a, b) => {
      if (a[sort.key] < b[sort.key]) return sort.direction === "asc" ? -1 : 1;
      if (a[sort.key] > b[sort.key]) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  const getCurrentCharacterList = () => {
    // Mevcut karakter listesini getirir
    const currentPageIdx = currentPage - 1;
    const filteredData = applyFilter(characterState?.result?.results || []); // Filtre uygula
    const sortedData = applySort(filteredData); // Sıralama uygula
    return sortedData.slice(
      currentPageIdx * pageSize,
      currentPageIdx * pageSize + pageSize
    );
  };

  const currentCharacterList = getCurrentCharacterList(); // Görüntülenecek karakterler

  return (
    <div className="character-list-container">
      {characterState.loading ? (
        <div>Yükleniyor...</div> // Yükleme ekranı
      ) : (
        characterState.result && (
          <div>
            <TableHeader
              headerContextList={tableHeaderContext} // Tablo başlıklarını iletir
              onFilter={(key, value) => {
                setCurrentPage(1); // Filtre sonrası sayfa sıfırlanır
                setFilter({ ...filter, [key]: value });
              }}
              onSort={(key) => {
                setCurrentPage(1); // Sıralama sonrası sayfa sıfırlanır
                setSort((prevSort) => {
                  const isSameKey = prevSort && prevSort.key === key;
                  const newDirection =
                    isSameKey && prevSort.direction === "asc" ? "desc" : "asc"; // Sıralama yönünü değiştir
                  return { key, direction: newDirection };
                });
              }}
              onToggle={setViewType} // Görünüm tipini günceller
            />
            {!characterState?.result?.results ||
            currentCharacterList.length === 0 ? (
              <div>No results found.</div> // Sonuç bulunamadığında gösterilecek mesaj
            ) : (
              <div
                className={viewType === "grid" ? "grid-layout" : "row-layout"} // Grid veya row görünümü
              >
                {currentCharacterList.map((character) =>
                  viewType === "grid" ? (
                    <CharacterCard key={character.id} {...character} /> // Grid görünümü için CharacterCard
                  ) : (
                    <CharacterRow key={character.id} {...character} /> // Row görünümü için CharacterRow
                  )
                )}
              </div>
            )}
            <PagingComponent
              currentPage={currentPage} 
              pageCount={Math.ceil(
                applyFilter(characterState?.result?.results).length / pageSize
              )} // Toplam sayfa sayısı
              nextPage={() => {
                if (
                  currentPage <
                  Math.ceil(
                    applyFilter(characterState.result.results).length / pageSize
                  )
                )
                  setCurrentPage(currentPage + 1); // Sonraki sayfa
              }}
              prevPage={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1); // Önceki sayfa
              }}
              setPage={setCurrentPage} // Sayfa değişimi
              pageSize={pageSize} // Sayfa başına kayıt sayısı
              setPageSize={setPageSize} // Sayfa boyutunu ayarla
              rowCount={applyFilter(characterState.result.results).length} // Toplam kayıt sayısı
            />
          </div>
        )
      )}
      {!!characterState?.error?.message && <div>Oops bir hata oluştu</div>} 
    </div>
  );
};

export default CharacterList;