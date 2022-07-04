import useGroupCardsByType from "../../hooks/useGroupCardsByType";
import CardList from "../CardList";

export default function Board() {
  const cardsForTypes = useGroupCardsByType();

  return (
    <div className="board">
      {cardsForTypes.HQ && cardsForTypes.HQ.length > 0 && (
        <CardList title={"Head Quarters"} cards={cardsForTypes.HQ} />
      )}

      {cardsForTypes.Character && cardsForTypes.Character.length > 0 && (
        <CardList title={"Character"} cards={cardsForTypes.Character} />
      )}

      {cardsForTypes.Technology && cardsForTypes.Technology.length > 0 && (
        <CardList title={"Technology"} cards={cardsForTypes.Technology} />
      )}
    </div>
  );
}
