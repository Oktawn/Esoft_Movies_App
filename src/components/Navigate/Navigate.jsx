
function Navigate({ param, state }) {

    const handleSortRaiting = (sortBy) => {
        const sortFilms = [...param];
        if (sortBy === "Low")
            sortFilms.sort((a, b) => a.rating - b.rating);
        else
            sortFilms.sort((a, b) => b.rating - a.rating);
        state(sortFilms);
    };

    return (
        <div className="navigate">
            <input></input>
            <button onClick={() => handleSortRaiting("Low")}>Low</button>
            <button onClick={() => handleSortRaiting("High")}>High</button>
        </div>
    );
}

export default Navigate;