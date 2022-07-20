import { memo } from 'react';
import usePaginationCards from "../../hooks/usePaginationCards";

import { MAX_CARDS_TO_SHOW } from "../../helpers";

import Card from "../Card";
import Pagination from "../Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function CardList({ title, cards = [] }) {
  const { nextPage, prevPage, pagination, cardsImgToShow, selectedPage } =
    usePaginationCards({
      cards,
      numberOfCardsToShow: MAX_CARDS_TO_SHOW,
    });

  return (
    <div className="list">
      <div className="list__container-title">
        <h1 className="list__title"> {title}</h1>
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

      {cards.length >= MAX_CARDS_TO_SHOW && (
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

export default memo(CardList);