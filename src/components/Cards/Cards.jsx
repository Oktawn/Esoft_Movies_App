import React from "react";

function Cards({ film }) {
    return (
        <div class="movie-card">
            <h2>{film.title}</h2>
            <p>Описание: {film.description}</p>
            <p>В ролях: {film.actors.join(', ')}</p>
            <p>Жанры: {film.categories.join(', ')}</p>
            <p>Рейтинг: {film.rating} </p>
        </div>
    );
}

export default Cards