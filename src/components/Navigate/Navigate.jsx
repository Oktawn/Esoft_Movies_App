import { useState } from "react";
import { useCard } from "../store/store";
import Input from "../Input/Input";
import SortRaiting from "../SortRaiting/SortRaiting";

function Navigate({ films, state }) {
    return (
        <div className="navigate">
            <span>filter by categories:</span>
            <Input state={state} filter={"categories"} />
            <SortRaiting films={films} state={state} />
        </div>
    );
}

export default Navigate;