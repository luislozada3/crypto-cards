import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

      {(!cardsForTypes.HQ || cardsForTypes.HQ.length === 0) &&
        (!cardsForTypes.Character || cardsForTypes.Character.length === 0) &&
        (!cardsForTypes.Technology ||
          cardsForTypes.Technology.length === 0) && (
          <p className="list__message-error">
            {" "}
            <FontAwesomeIcon
              icon={faSearch}
              color="white"
              className={`list__icon-search`}
            />
            No se consiguieron coincidencias
          </p>
        )}
    </div>
  );
}
