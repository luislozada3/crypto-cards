import { dataCardMock } from "../mock/card.mock";

export const getCards = async () => {
  return dataCardMock;

  // no pude realizar el llamado a los datos ya que me devuelve error de cords
  // try {
  //   const response = await fetch("https://pastebin.com/raw/sv7YB2Wq", );
  //   const data = response.json();
  //   return data;
  // } catch (e) {
  //   throw new Error(e.message);
  // }
};

export const getImgCard = async (cardId, formatImg) => {
  const response = await fetch(`https://deviants-factions.mo.cloudinary.net/cards/${cardId}.${formatImg}?tx=h_600,q_80,f_auto`);
  const blob = await response.blob();
  const imgUrl = window.URL.createObjectURL(blob);
  return imgUrl;
}
