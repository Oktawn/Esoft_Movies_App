import Search from "/search.svg";
import Home from "/house.svg";
import { Link } from "react-router-dom";
import ImageHeader from "../ImageHeader/ImageHeader";

function Header() {
  return (
    <header>
      <h1>Новый кинопоиск</h1>
      <p>
        <Link to="/Search">
          <img src={Search} alt="Search Films" className="logo" />
        </Link>
        <Link to="/">
          <img src={Home} alt="Back to home" className="logo" />
        </Link>
        <ImageHeader />
      </p>
      <hr />
    </header>
  );
}

export default Header;
