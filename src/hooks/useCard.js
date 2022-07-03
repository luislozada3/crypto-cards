import { useContext, useEffect, useState } from 'react';
import CardsContext from '../context/CardsContext';

export default function useCard ( cardId ) {
  const { cards } = useContext(CardsContext);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect( () => {
    if(cards.length && cardId) {
      const card = getSelectedCard(cardId);
      setSelectedCard(card);
    }
    getSelectedCard();
  }, [cards, cardId]);

  const getSelectedCard = (cardId) => {
    const card = cards.find( card => card.id === cardId );
    return card;
  }

  return selectedCard;
}