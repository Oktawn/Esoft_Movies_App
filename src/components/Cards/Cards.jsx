import React from "react";
import Watch from '/eye_watchLater.svg'
import Fav from '/favorite.svg'
import { useCard } from "../store/store";
import { Link } from "react-router-dom";

function Cards({ film }) {

    const activeWatch = useCard(state => (state.getWatch));
    const swapWatch = useCard(state => (state.toggleWatch));
    const activeFavorite = useCard(state => (state.getFavorite));
    const swapFavorite = useCard(state => (state.toggleFavorite));

    return (
        <div class="movie-card">
            <Link to={"/films/" + film.id}> <h2> {film.title}</h2></Link>
            <p>Описание: {film.description}</p>
            <p>В ролях: {film.actors.join(', ')}</p>
            <p>Жанры: {film.categories.join(', ')}</p>
            <p>Рейтинг: {film.rating} </p>
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
    );
}

export default Cards