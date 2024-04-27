import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Main />} />
                </Route>

                <Route element={<PageNotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;