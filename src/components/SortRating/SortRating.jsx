import { useCard } from "../store/store";

function SortRating({ films, state }) {

  const resetCards = useCard(state => state.getCards)

  const handleSortRating = (sortBy) => {
    const sortFilm = [...films]
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
      <button className="button" onClick={() => handleSortRating("Low")}>
        Low
      </button>
      <button className="button" onClick={() => handleSortRating("High")}>
        High
      </button>
      <button className="button" onClick={() => handleSortRating("Reset")}>
        Reset
      </button>
    </span>
  );
}
export default SortRating