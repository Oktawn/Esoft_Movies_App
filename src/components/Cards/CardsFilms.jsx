import Input from "../Input/Input";

function CardFilms({ film, state }) {
  return (
    <div className="film-card">
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <p>добавить комментарий</p>
      <Input state={state} />
      <p>Комментарии</p>
      <ul>
        {film.comments.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default CardFilms;
