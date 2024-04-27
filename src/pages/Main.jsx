import { useState } from 'react'
import CardList from '../components/CardList/CardList'
import { FILM_DATA } from '../mocks/FilmData'
import Navigate from '../components/Navigate/Navigate';



function Main() {
    const [films, setFilms] = useState(FILM_DATA);

    return (
        <>
            <Navigate param={films} state={setFilms} />
            <CardList props={films} />
        </>
    );
}

export default Main;