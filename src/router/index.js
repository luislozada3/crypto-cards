import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const SearchResult = lazy(() => import("../pages/SearchResult"));
const Details = lazy(() => import("../pages/Details"));

export default function Router() {
  return (
    <Suspense fallback={"Cargando..."}>
      <Switch>
        <Route path={["/", "/home"]} exact component={Home} />
        <Route path={"search/:keyword"} exact component={SearchResult} />
        <Route path={"details/:cardId"} exact component={Details} />
      </Switch>
    </Suspense>
  );
}
