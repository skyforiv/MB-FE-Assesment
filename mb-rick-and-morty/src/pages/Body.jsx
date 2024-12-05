import React from "react";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./character-list/CharacterList";

const Body = () => {
  return (
    <div>
        
      <Routes>
        <Route path="/" element={<CharacterList/>}/>
      </Routes>
    </div>
  );
};

export default Body;
