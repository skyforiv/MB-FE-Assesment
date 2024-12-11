import React, { useEffect, useState } from 'react';
import "./CharacterList.css"
import CharacterCard from '../../components/character-card/CharacterCard';
import CharacterRow from '../../components/character-row/CharacterRow';
import { getCharacters } from '../../services/RickandMortyService';
import PagingComponent from '../../components/paging/PagingComponent';


const CharacterList = () => {
  const [characterState, setCharacterState] = useState({
    loading: false,
    error: {},
    result: {}
});

const [currentPage, setCurrentPage] = useState(1);

  const getCharactersAsync = async () => {
    const result = await getCharacters({page:currentPage});
    setCharacterState(result);
  }

  useEffect(() => {
    getCharactersAsync();
  }, [currentPage]);
  
    return (
        <div>
          {
            characterState.loading
            ? (<div> Yükleniyor...</div>)
            : characterState.result && (
              <div>
                {
                  !characterState.result.results || characterState.result.results.length === 0
                  ? (<div>Sonuç bulunamadı</div>)
                  : (
                    <div>
                      {
                        characterState.result.results.map(character => <CharacterRow key = {character.id} {...character}/>)
                      }
                    </div>
                  )
                }
              </div>
            )
          }
          <PagingComponent 
          currentPage={currentPage} 
          pageCount = {characterState?.result?.info?.pages}
          nextPage={() => {
            if(currentPage<characterState?.result?.info?.pages -1)
              setCurrentPage(currentPage + 1);
          }} 
          prevPage={() => {
            if(currentPage !== 0)
            setCurrentPage(currentPage - 1)
          }} 
          setPage={setCurrentPage} />
        </div>
    );
};

export default CharacterList;