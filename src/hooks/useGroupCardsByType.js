import { useContext, useState, useEffect } from "react";
import CardsContext from "../context/CardsContext";
import { useParams } from "react-router-dom";

import { groupCardsByType, filterCardByKeyword } from "../helpers";

export default function useGroupCardsByType() {
  const { cards } = useContext(CardsContext);
  const { keyword } = useParams();
  const [cardsForTypes, setCardsForTypes] = useState({
    HQ: [],
    Character: [],
    Technology: [],
  });

  useEffect(() => {
    const cardsToGroup =
      keyword !== "" ? filterCardByKeyword(cards, keyword) : cards;
    const cardsGroupedByType = groupCardsByType(cardsToGroup);
    setCardsForTypes({
      HQ: cardsGroupedByType.HQ ?? [],
      Character: cardsGroupedByType.Character ?? [],
      Technology: cardsGroupedByType.Technology ?? [],
    });
  }, [cards, keyword]);

  return cardsForTypes;
}
