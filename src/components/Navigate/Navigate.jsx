import { useState } from "react";
import { useCard } from "../store/store";

function Navigate({ state }) {

    const [delay, setDelay] = useState(0)
    const sortLow = useCard(state => state.sortLowCards)
    const sortHigh = useCard(state => state.sortHighCards)
    const resetCards = useCard(state => state.getCards)
    const filterCard = useCard(state => state.getCardsByFilterCat)

    const handleSortRaiting = (sortBy) => {
        if (sortBy === "Low")
            state(sortLow);

        else if (sortBy === "High")
            state(sortHigh);

        else
            state(resetCards);

    };

    const handleFilterChange = (e) => {
        const filterText = e.target.value;
        if (delay)
            clearTimeout(delay);

        setDelay(setTimeout(() => {
            const filterFilm = filterCard(filterText);

            if (filterText === '') {
                state(resetCards);
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