import useCard from "./hooks/useCards";
import Router from "./router";

function App() {
  const { isLoadingCards, hasError } = useCard();
  
  if ( isLoadingCards ) {
    return (
      <p style={{color: "white"}}>loading application...</p>
    )
  }

  if (hasError) {
    return (
      <p style={{color: "red"}}>An error has occurred, please reload the page</p>
    );
  }


  return (
    <Router/>
  );
}

export default App;
