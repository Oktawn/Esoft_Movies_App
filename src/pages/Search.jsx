import { Combobox } from "react-widgets/cjs";
import CardList from "../components/CardList/CardList";
import { useCard } from "../components/store/store";
import { useState } from "react";
import Input from "../components/Input/Input";
import SortRating from "../components/SortRating/SortRating";

function Search() {
  const [films, setFilms] = useState(useCard((state) => state.cards));
  const [filter, setFilter] = useState("");
  return (
    <>
      <div className="container">
        <Combobox
          value={filter}
          onChange={(next) => setFilter(next)}
          data={["actors", "categories"]}
        />
        <Input filter={filter} state={setFilms} />
        <SortRating films={films} state={setFilms} />
        <CardList props={films} />
      </div>
    </>
  );
}

export default Search;
