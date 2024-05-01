import { useCard } from "../components/store/store";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardFilms from "../components/Cards/CardsFilms";

function Films() {
  const param = useParams();
  const [film, setFilm] = useState(
    useCard((state) => state.getCard(param.id - 1))
  );
  return (
    <>
      <CardFilms film={film} state={setFilm} />
    </>
  );
}

export default Films;
