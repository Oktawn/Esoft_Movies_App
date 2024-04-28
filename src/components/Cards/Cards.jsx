import React from "react";
import Watch from '/public/eye_watchLater.svg'
import Fav from '/public/favorite.svg'

function Cards({ film }) {
    return (
        <div class="movie-card">
            <h2>{film.title}</h2>
            <p>Описание: {film.description}</p>
            <p>В ролях: {film.actors.join(', ')}</p>
            <p>Жанры: {film.categories.join(', ')}</p>
            <p>Рейтинг: {film.rating} </p>
            <p>
                <img src={Watch} className="logo" alt="Watch later" />
                <img src={Fav} className="logo" alt="Favorite film" />
            </p>
        </div>
    );
}

export default Cards