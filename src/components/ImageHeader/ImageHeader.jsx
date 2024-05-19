import { useCard } from "../store/store";
import Watch from "/eye_watchLater.svg";
import Fav from "/favorite.svg";

function ImageHeader() {
  const countWatch = useCard((state) => state.getCountWatch());
  const countFavorite = useCard((state) => state.getCountFavorite());
  return (
    <span>
      <img src={Watch} alt="Watch later" className="logo" />
      {countWatch}
      <img src={Fav} alt="Favorite film" className="logo" />
      {countFavorite}
    </span>
  );
}

export default ImageHeader;
