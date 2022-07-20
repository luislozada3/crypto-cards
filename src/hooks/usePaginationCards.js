import { useState, useEffect, useCallback } from "react";

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
  const { activePage, numberOfCardsToShow: paginationNumberOfCardsToShow } =
    pagination;
  const [cardsImgToShow, setCardsImgToShow] = useState([]);

  useEffect(() => {
    const endPoint = activePage * paginationNumberOfCardsToShow;
    const startPoint = endPoint - paginationNumberOfCardsToShow;
    const selectedCards = cards.slice(startPoint, endPoint);
    setCardsImgToShow(selectedCards);
  }, [cards, activePage, paginationNumberOfCardsToShow]);

  useEffect(() => {
    if (cards.length) {
      const totalCards = cards.length;
      const totalPages = Math.ceil(totalCards / paginationNumberOfCardsToShow);

      setPagination((prevPagination) => ({
        ...prevPagination,
        totalCards,
        totalPages,
      }));
    }
  }, [cards.length, setPagination, paginationNumberOfCardsToShow]);

  const nextPage = useCallback( () => {
    if (pagination.activePage < pagination.totalPages) {
      setPagination((prev) => ({
        ...prev,
        activePage: prev.activePage + 1,
      }));
    }
  }, [pagination, setPagination])

  const prevPage = useCallback(() => {
    if (activePage > 1) {
      setPagination((prev) => ({
        ...prev,
        activePage: prev.activePage - 1,
      }));
    }
  }, [setPagination, activePage]);

  const selectedPage = useCallback( (numberPage) => {
    setPagination((prev) => ({
      ...prev,
      activePage: numberPage,
    }));
  }, [setPagination]);

  return {
    nextPage,
    prevPage,
    pagination,
    cardsImgToShow,
    selectedPage,
  };
}
