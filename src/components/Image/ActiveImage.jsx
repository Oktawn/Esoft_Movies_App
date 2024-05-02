import Watch from "/eye_watchLater.svg";
import Fav from "/favorite.svg";
import { useCard } from "../store/store";

function ActiveImage({ id }) {
  const activeWatch = useCard((state) => state.getWatch);
  const swapWatch = useCard((state) => state.toggleWatch);
  const activeFavorite = useCard((state) => state.getFavorite);
  const swapFavorite = useCard((state) => state.toggleFavorite);
  return (
    <p>
      <img
        src={Watch}
        alt="Watch later"
        className={activeWatch(id) ? "logo_active" : "logo"}
        onClick={() => swapWatch(id)}
      />
      <img
        src={Fav}
        alt="Favorite film"
        className={activeFavorite(id) ? "logo_active" : "logo"}
        onClick={() => swapFavorite(id)}
      />
    </p>
  );
}
export default ActiveImage;
