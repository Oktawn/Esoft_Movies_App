import { useCounter } from '../store/store';
import Watch from '/eye_watchLater.svg';
import Fav from '/favorite.svg';
import Search from '/search.svg'

function Header() {

    const countWatch = useCounter(state => state.countWatch)
    const countFavorite = useCounter(state => state.countFavorite)

    return (
        <header>
            <h1>
                Новый кинопоиск
            </h1>
            <p>
                <img
                    src={Search}
                    alt="Search Films"
                    className='logo'
                />
                <img
                    src={Watch}
                    alt="Watch later"
                    className='logo'
                />
                <span>{countWatch}</span>
                <img
                    src={Fav}
                    alt="Favorite film"
                    className='logo'
                />
                <span>{countFavorite}</span>

            </p>
            <hr />
        </header>
    )
}

export default Header;