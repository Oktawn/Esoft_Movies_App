import Input from "../Input/Input";
import SortRating from "../SortRating/SortRating";

function Navigate({ films, state }) {
    return (
        <div className="navigate">
            <span>filter by categories:</span>
            <Input state={state} filter={"categories"} />
            <SortRating films={films} state={state} />
        </div>
    );
}

export default Navigate;