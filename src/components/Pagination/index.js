import Button from "../Button";
export default function Pagination({
  nextPage,
  prevPage,
  selectedPage,
  pagination,
}) {
  const maxButtonPageToShow = 5;
  const { activePage, totalPages } = pagination;
  const remainingPages = totalPages - activePage;

  const totalButtonToSHow =
    remainingPages >= maxButtonPageToShow
      ? maxButtonPageToShow
      : remainingPages;

  const buttonToShow = () => {

    const buttons = new Array(5).fill(activePage);

    return buttons.map( (numberPage, index) => {
      return (
        <Button key={`${numberPage}-${index}`} onClick={() => selectedPage(numberPage)}>{numberPage}</Button>
      );
    });
  }
  

  return (
    <div className="pagination">
      {buttonToShow()}
    </div>
  );
}
