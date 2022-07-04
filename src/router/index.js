import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const SearchResult = lazy(() => import("../pages/SearchResult"));
const Details = lazy(() => import("../pages/Details"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/search">
            <Route index element={<SearchResult />} />
            <Route path=":keyword" element={<SearchResult />} />
          </Route>

          <Route path="/details/:cardId" element={<Details />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
