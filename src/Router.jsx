import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Films from "./pages/Films";
import FilmsLayout from "./layouts/FilmsLayout";

const getFilmPath = (path) => `/films${path}`;


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/Search" element={<Search />} />
        </Route>

        <Route path="/films" element={<FilmsLayout />}>
          <Route element={<Films />} path={getFilmPath("/:id")} />
        </Route>

        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
