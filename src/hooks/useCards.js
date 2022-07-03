import { useContext, useEffect, useState } from "react";
import CardContext from "../context/CardsContext";
import { getCards } from "../services/Card.service";

const useCard = () => {
  const { setCards } = useContext(CardContext);
  const [isLoadingCards, setIsLoadingCards] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getDataCards = async () => {
      try {
        const dataCards = await getCards();
        setCards(dataCards);
      } catch (e) {
        setHasError(true);
      } finally {
        setIsLoadingCards(false);
      }
    };

    getDataCards();
  }, [setCards]);

  return {
    isLoadingCards,
    hasError,
  };
};

export default useCard;
