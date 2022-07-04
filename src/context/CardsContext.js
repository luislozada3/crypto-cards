import React, { useState } from "react";

const Context = React.createContext({});

export const CardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({
    "CARD TYPE": [],
    RARITY: [],
    FACTIONS: [],
  });

  return (
    <Context.Provider
      value={{
        cards,
        filters,
        setCards,
        setFilters,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
