import React from "react";
import Watch from '/eye_watchLater.svg'
import Fav from '/favorite.svg'
import ImageCards from '../Image/ImageCards';
import { useCard } from "../store/store";

function Cards({ film }) {

    const activeWatch = useCard(state => (state.getWatch));
    const swapWatch = useCard(state => (state.toggleWatch));
    const activeFavorite = useCard(state => (state.getFavorite));

    return (
        <div class="movie-card">
            <h2>{film.title}</h2>
            <p>Описание: {film.description}</p>
            <p>В ролях: {film.actors.join(', ')}</p>
            <p>Жанры: {film.categories.join(', ')}</p>
            <p>Рейтинг: {film.rating} </p>
            <p>
                <ImageCards
                    src={Watch}
                    alt="Watch later"
                    active={activeWatch(film.id)}
                />
                <ImageCards
                    src={Fav}
                    alt="Favorite film"
                    active={activeFavorite(film.id)}
                />
            </p>
        </div>
    );
}

export default Cards