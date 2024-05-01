import ImageCards from "../Image/ImageCards";
import Input from "../Input/Input";

function CardFilms({ film, state }) {
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
        </div>
      </div>
      <div>
        <h2>Описание</h2>
        <p>{film.description}</p>
      </div>
      <p>добавить комментарий</p>
      <Input state={state} />
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
