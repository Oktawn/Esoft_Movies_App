import { useState } from "react";
import { useCard } from "../store/store";

function Input({ filter,state }) {

    const [delay, setDelay] = useState(0)
    const resetCards = useCard(state => state.getCards)
    const filterCard = useCard(state => state.getCardsByFilter)


    const handleFilterChange = (e) => {
        const filterText = e.target.value;
        if (delay)
            clearTimeout(delay);

        setDelay(setTimeout(() => {
            const filterFilm = filterCard(filter, filterText);

            if (filterText === '') {
                state(resetCards);
            } else {
                state(filterFilm);
            }

        }, 300));
    }

    return (
        <input type="text" onChange={handleFilterChange}></input>
    )
}
export default Input