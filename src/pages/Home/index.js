import Wrapper from '../../components/Wapper';
import SearchBar from '../../components/SearchBar';
import Board from "../../components/Board"

export default function Home () {
  return (
    <Wrapper>
      <SearchBar/>
      <Board/>
    </Wrapper>
  )
}