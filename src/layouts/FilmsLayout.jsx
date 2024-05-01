import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function FilmsLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default FilmsLayout;
