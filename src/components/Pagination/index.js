import { useEffect, useState, memo } from "react";
import Button from "../Button";
import { MAX_NUMBER_OF_PAGINATION_BUTTONS_TO_SHOW } from "../../helpers";

function Pagination({
  nextPage,
  prevPage,
  selectedPage,
  pagination,
}) {
  const { activePage, totalPages } =
    pagination;
  const [hasNextButton, setHasNextButton] = useState(false);
  const [hasPrevButton, setHasPrevButton] = useState(false);

  useEffect(() => {
    const remainingPages = totalPages - activePage;
    const hasNextPage = remainingPages > 0;
    const hasPrevPage = activePage === 1 ? false : activePage <= totalPages;

    setHasNextButton(hasNextPage);
    setHasPrevButton(hasPrevPage);
  }, [activePage, totalPages]);

  const getPaginationGroup = () => {
    let start = activePage;
    let pageLimit = MAX_NUMBER_OF_PAGINATION_BUTTONS_TO_SHOW;
    if (totalPages <= MAX_NUMBER_OF_PAGINATION_BUTTONS_TO_SHOW) {
      pageLimit = totalPages;
    }

    start =
      start + (MAX_NUMBER_OF_PAGINATION_BUTTONS_TO_SHOW - 1) <= totalPages
        ? start
        : activePage;

    if (start + (MAX_NUMBER_OF_PAGINATION_BUTTONS_TO_SHOW - 1) >= totalPages) {
      start =
        totalPages - MAX_NUMBER_OF_PAGINATION_BUTTONS_TO_SHOW < 0
          ? 1
          : totalPages - MAX_NUMBER_OF_PAGINATION_BUTTONS_TO_SHOW + 1;
    }

    const buttons = new Array(pageLimit).fill().map((a, i) => i + start);

    if (buttons.length > 1) {
      return buttons.map((selectedPageNumber, index) => {
        return (
          <Button
            key={`${selectedPageNumber}-${index}`}
            className={activePage === selectedPageNumber && "active"}
            onClick={() => selectedPage(selectedPageNumber)}
          >
            {" "}
            {selectedPageNumber}{" "}
          </Button>
        );
      });
    }

    return null;
  };

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        {hasPrevButton && <Button onClick={() => prevPage()}> {"<"} </Button>}

        {getPaginationGroup()}

        {hasNextButton && <Button onClick={() => nextPage()}> {">"} </Button>}
      </div>

      <div className="pagination__legend">
        <p className="pagination__text">
          Current Page: <span className="pagination__record">{activePage}</span>{" "}
          Total Pages: <span className="pagination__record">{totalPages}</span>
        </p>
      </div>
    </div>
  );
}

export default memo(Pagination);