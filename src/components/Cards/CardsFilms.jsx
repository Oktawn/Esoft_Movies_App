import ImageCards from "../Image/ImageCards";
import InputAddComment from "../Input/InputAddComment";
import Comment from "../Comment/Comment";
import ActiveImage from "../Image/ActiveImage";
import { useCard } from "../store/store";
import CardList from "../CardList/CardList";

function CardFilms({ film }) {
  const similarFilm = useCard((state) =>
    state.getSimilarCards(film.id, film.categories[0])
  );
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
          <ActiveImage id={film.id} />
        </div>
      </div>
      <div>
        <h2>Описание</h2>
        <p>{film.description}</p>
      </div>
      <h2>Похожие по жанру:</h2>
      <CardList props={similarFilm} />
      <h2>Добавить комментарий</h2>
      <InputAddComment id={film.id} comments={film.comments} />
      <h2>Комментарии:</h2>
      <ul>
        {film.comments.map((f) => (
          <li>{<Comment text={f} />}</li>
        ))}
      </ul>
    </>
  );
}

export default CardFilms;
