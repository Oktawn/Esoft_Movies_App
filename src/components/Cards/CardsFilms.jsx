import Watch from "/eye_watchLater.svg";
import Fav from "/favorite.svg";
import ImageCards from "../Image/ImageCards";
import InputAddComment from "../Input/InputAddComment";
import { useCard } from "../store/store";

function CardFilms({ film }) {
  const activeWatch = useCard((state) => state.getWatch);
  const swapWatch = useCard((state) => state.toggleWatch);
  const activeFavorite = useCard((state) => state.getFavorite);
  const swapFavorite = useCard((state) => state.toggleFavorite);
  return (
    <>
      <div className="container-film">
        <ImageCards src={film.image} />
        <div className="film-show">
          <h1>{film.title}</h1>
          <hr />
          <p>Рейтинг: {film.rating}</p>
          <p>Жанры: {film.categories.join(", ")}</p>
          <p>Режиссер: {film.producer}</p>
          <p>В главной роли: {film.actors.join(", ")}</p>
          <p>Длительность:{film.duration}</p>
          <p>Год показа: {film.year}</p>
          <p>
            <img
              src={Watch}
              alt="Watch later"
              className={activeWatch(film.id) ? "logo_active" : "logo"}
              onClick={() => swapWatch(film.id)}
            />
            <img
              src={Fav}
              alt="Favorite film"
              className={activeFavorite(film.id) ? "logo_active" : "logo"}
              onClick={() => swapFavorite(film.id)}
            />
          </p>
        </div>
      </div>
      <div>
        <h2>Описание</h2>
        <p>{film.description}</p>
      </div>
      <p>добавить комментарий</p>
      <InputAddComment id={film.id} comments={film.comments} />
      <p>Комментарии</p>
      <ul>
        {film.comments.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
    </>
  );
}

export default CardFilms;
