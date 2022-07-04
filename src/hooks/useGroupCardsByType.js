import { useContext, useState, useEffect } from "react";
import CardsContext from "../context/CardsContext";
import { useParams } from "react-router-dom";

import { groupCardsByType, filterCardByKeyword, filterCards } from "../helpers";

export default function useGroupCardsByType() {
  const { cards, filters } = useContext(CardsContext);
  const { keyword } = useParams();
  const [cardsForTypes, setCardsForTypes] = useState({
    HQ: [],
    Character: [],
    Technology: [],
  });

  useEffect(() => {
    const cardsFiltersByKeyword =
      keyword !== "" ? filterCardByKeyword(cards, keyword) : cards;

    const cardsFilterByCardType = filterCards(cardsFiltersByKeyword, "CardType", filters["CARD TYPE"]);
    const cardsFilterByFaction = filterCards(cardsFilterByCardType, "Faction", filters["FACTIONS"]);
    const cardsFilterByRarity = filterCards(cardsFilterByFaction, "Rarity", filters["RARITY"]);

    const cardsGroupedByType = groupCardsByType(cardsFilterByRarity);
    setCardsForTypes({
      HQ: cardsGroupedByType.HQ ?? [],
      Character: cardsGroupedByType.Character ?? [],
      Technology: cardsGroupedByType.Technology ?? [],
    });
  }, [cards, keyword, filters]);

  return cardsForTypes;
}
