export const MAX_NUMBER_OF_PAGINATION_BUTTONS_TO_SHOW = 5;
export const MAX_CARDS_TO_SHOW = 12;

export const groupCardsByType = (cards) => {
  const cardsGroupedByType = cards.reduce((cardAcc, card) => {
    const { CardType } = card;

    if (cardAcc[CardType]) {
      return {
        ...cardAcc,
        [CardType]: [...cardAcc[CardType], card],
      };
    }

    return {
      ...cardAcc,
      [CardType]: [card],
    };
  }, {});

  return cardsGroupedByType;
};

export const filterCardByKeyword = (cards = [], keyword) => {
  const keywordUpperCase = keyword ? keyword.toUpperCase() : ""; 
  return cards.filter( card => {
    const nameUppercase = card.Name.toUpperCase();
    return nameUppercase.includes(keywordUpperCase)
  });
}


export const getUrlImgCard = (cardId, formatImg) =>
  `https://deviants-factions.mo.cloudinary.net/cards/${cardId}.${formatImg}?tx=h_600,q_80,f_auto`;
