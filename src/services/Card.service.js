export const getCards = async () => {
  try {
    const response = await fetch("https://pastebin.com/raw/sv7YB2Wq");
    const data = response.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getImgCard = (cardId, typeCard) => {
  try {
    const format = typeCard.toUpperCase() === "HQ" ? "PNG" : "gif";

    const response = fetch(
      `https://deviants-factions.mo.cloudinary.net/cards/${cardId}.${format}?tx=h_600,q_80,f_auto`
    );
    const data = response.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
