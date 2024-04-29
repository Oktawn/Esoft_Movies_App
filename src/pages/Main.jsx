import CardList from '../components/CardList/CardList'
import Navigate from '../components/Navigate/Navigate';
import { useCard } from '../components/store/store';
import { useState } from 'react';

function Main() {
    const [films, setFilms] = useState(useCard((state) => state.cards));
    return (
        <div>
            <Navigate state={setFilms} />
            <CardList props={films} />
        </div>
    );
}

export default Main;