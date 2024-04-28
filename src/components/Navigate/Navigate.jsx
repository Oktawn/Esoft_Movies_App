import { useState } from "react";
import { FILM_DATA } from "../../mocks/FilmData";

function Navigate({ param, state }) {

    const [delay, setDelay] = useState(500)

    const handleSortRaiting = (sortBy) => {
        const sortFilms = [...param];
        if (sortBy === "Low") {
            sortFilms.sort((a, b) => a.rating - b.rating);
        }
        else if (sortBy === "High") {
            sortFilms.sort((a, b) => b.rating - a.rating);
        }
        else {
            state(FILM_DATA);
            return
        }

        state(sortFilms);
    };

    const handleFilterChange = (e) => {
        const filterText = e.target.value;
        if (delay)
            clearTimeout(delay);

        setDelay(setTimeout(() => {
            const filterFilm = FILM_DATA.filter(item =>
                item.categories.some(cat =>
                    cat.toLowerCase().startsWith(filterText.toLowerCase())));

            if (filterText === '') {
                state(FILM_DATA);
            } else {
                state(filterFilm);
            }

        }, 200));
    }



    return (
        <div className="navigate">
            <span>filter by categories:</span>
            <input type="text" onChange={handleFilterChange}></input>
            <span>sorting by rating: </span>
            <button onClick={() => handleSortRaiting("Low")}>Low</button>
            <button onClick={() => handleSortRaiting("High")}>High</button>
            <button onClick={() => handleSortRaiting("Reset")}>Reset</button>

        </div>
    );
}

export default Navigate;