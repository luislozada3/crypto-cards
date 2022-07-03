import useCard from "./hooks/useCards";
import Router from "./router";

function App() {
  const { isLoadingCards, hasError } = useCard();
  
  if ( isLoadingCards ) {
    return (
      <p>Cargando...</p>
    )
  }

  if (hasError) {
    return (
      <p>Ha ocurrido un error recargue la pagina por favor</p>
    );
  }


  return (
    <Router/>
  );
}

export default App;
