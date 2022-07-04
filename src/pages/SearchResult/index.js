import Wrapper from "../../components/Wapper";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import Board from "../../components/Board";

export default function SearchResult() {
  return (
    <Wrapper>
      <SearchBar />
      <Filters />
      <Board />
    </Wrapper>
  );
}
