import useGroupCardsByType from "../../hooks/useGroupCardsByType";
import CardList from "../CardList";

export default function Board() {
  const cardsForTypes = useGroupCardsByType();

  return (
    <div className="board">
      <CardList title={"Head Quarters"} cards={cardsForTypes.HQ} />
      <CardList title={"Character"} cards={cardsForTypes.Character} />
      <CardList title={"Technology"} cards={cardsForTypes.Technology} />
    </div>
  );
}
