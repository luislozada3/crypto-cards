import { useState, useEffect } from "react";

export default function usePaginationCards({
  cards,
  numberOfCardsToShow = 12,
}) {
  const [pagination, setPagination] = useState({
    totalPages: Math.ceil(cards.length / numberOfCardsToShow),
    numberOfCardsToShow,
    totalCards: cards.length,
    activePage: 1,
  });
  const [cardsImgToShow, setCardsImgToShow] = useState([]);

  useEffect(() => {
    const { activePage, numberOfCardsToShow } = pagination;
    const endPoint = activePage * numberOfCardsToShow;
    const startPoint = endPoint - numberOfCardsToShow;
    const selectedCards = cards.slice(startPoint, endPoint);
    setCardsImgToShow(selectedCards);
  }, [cards, pagination.activePage]);

  useEffect(() => {
    if (cards.length) {
      const { numberOfCardsToShow } = pagination;

      const totalCards = cards.length;
      const totalPages = Math.ceil(totalCards / numberOfCardsToShow);

      setPagination({
        ...pagination,
        totalCards,
        totalPages,
      });
    }
  }, [cards.length]);

  const nextPage = () => {
    if (pagination.activePage < pagination.totalPages) {
      setPagination((prev) => ({
        ...prev,
        activePage: prev.activePage + 1,
      }));
    }
  };

  const prevPage = () => {
    if (pagination.activePage > 1) {
      setPagination((prev) => ({
        ...prev,
        activePage: prev.activePage - 1,
      }));
    }
  };

  const selectedPage = (numberPage) => {
    setPagination((prev) => ({
      ...prev,
      activePage: numberPage,
    }));
  };

  return {
    nextPage,
    prevPage,
    pagination,
    cardsImgToShow,
    selectedPage,
  };
}
