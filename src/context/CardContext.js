import React, { useState } from "react";

const Context = React.createContext({
  cards: [],
  filters: [],
});

export const CardContext = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState([]);

  return (
    <Context.Provider
      value={{
        cards,
        filters,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
