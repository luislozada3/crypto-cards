import usePaginationCards from "../../hooks/usePaginationCards";

import Card from "../Card";
import Pagination from "../Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function CardList({ title, cards = [] }) {
  const { nextPage, prevPage, pagination, cardsImgToShow, selectedPage } =
    usePaginationCards({
      cards,
      numberOfCardsToShow: 12,
    });

  const handleToggleCardList = () => {};

  return (
    <div className="list">
      <div className="list__container-title" onClick={handleToggleCardList}>
        <h1 className="list__title"> {title}</h1>
        <FontAwesomeIcon
          icon={faChevronDown}
          color="white"
          className={`list__icon-arrow`}
        />
      </div>

      {cardsImgToShow.length ? (
        <div className="list__cards">
          {cardsImgToShow.map((card) => (
            <Card key={`${card.id}-${card.name}`} card={card} />
          ))}
        </div>
      ) : (
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

      {cardsImgToShow.length && (
        <Pagination
          selectedPage={selectedPage}
          nextPage={nextPage}
          prevPage={prevPage}
          pagination={pagination}
        />
      )}
    </div>
  );
}
