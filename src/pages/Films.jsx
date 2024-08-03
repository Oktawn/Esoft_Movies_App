import { useCard } from "../components/store/store";
import { useParams } from "react-router-dom";
import CardFilms from "../components/Cards/CardsFilms";

function Films() {
  const param = useParams();
  const film = useCard((state) => state.getCard(param.id - 1));
  return (
    <>
      <CardFilms film={film} />
    </>
  );
}

export default Films;
