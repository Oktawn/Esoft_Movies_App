import { useCard } from "../store/store";

function SortRaiting({ films, state }) {

    const resetCards = useCard(state => state.getCards)

    const handleSortRaiting = (sortBy) => {
        const sortFilm=[...films]
        if (sortBy === "Low")
            state(sortFilm.sort((a, b) => a.rating - b.rating));

        else if (sortBy === "High")
            state(sortFilm.sort((a, b) => b.rating - a.rating));

        else
            state(resetCards);

    };

    return (
      <span className="navigate">
        <span>sorting by rating: </span>
        <button className="button" onClick={() => handleSortRaiting("Low")}>
          Low
        </button>
        <button className="button" onClick={() => handleSortRaiting("High")}>
          High
        </button>
        <button className="button" onClick={() => handleSortRaiting("Reset")}>
          Reset
        </button>
      </span>
    );
}
export default SortRaiting