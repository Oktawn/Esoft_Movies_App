import { useCard } from '../store/store';
import Watch from '/eye_watchLater.svg';
import Fav from '/favorite.svg';
import Search from '/search.svg';
import Home from '/house.svg';
import { Link } from 'react-router-dom';

function Header() {

    const countWatch = (useCard(state => state.getCountWatch))
    const countFavorite = (useCard(state => state.getCountFavorite))

    return (
        <header>
            <h1>
                Новый кинопоиск
            </h1>
            <p>
                <Link to="/Search">
                    <img
                        src={Search}
                        alt="Search Films"
                        className='logo'
                    />
                </Link>
                <Link to="/">
                    <img
                        src={Home}
                        alt="Back to home"
                        className='logo'
                    />
                </Link>
                <img
                    src={Watch}
                    alt="Watch later"
                    className='logo'
                />
                {countWatch()}
                <img
                    src={Fav}
                    alt="Favorite film"
                    className='logo'
                />
                {countFavorite()}

            </p>
            <hr />
        </header>
    )
}

export default Header;