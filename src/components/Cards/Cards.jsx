import React from "react";
import { Link } from "react-router-dom";
import ActiveImage from "../Image/ActiveImage";

function Cards({ id, film }) {
  return (
    <div class="movie-card">
      <Link to={"/films/" + id}>
        <h2> {film.title}</h2>
      </Link>
      <p>Описание: {film.description}</p>
      <p>В ролях: {film.actors.join(", ")}</p>
      <p>Жанры: {film.categories.join(", ")}</p>
      <p>Рейтинг: {film.rating} </p>
      <ActiveImage id={id} />
    </div>
  );
}

export default Cards;
