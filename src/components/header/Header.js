import { Link } from 'react-router-dom';

import coffeeBeans from './img/coffeeBeansIcon.svg'
import LinkPage from '../linkPage/LinkPage';

import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <LinkPage />
            <h1 className="header__title">Everything You Love About Coffee</h1>
            <div className="header__item">
                <div className="header__item-line"></div>
                <img src={coffeeBeans} alt="coffeeBeans" />
                <div className="header__item-line"></div>
            </div>
            <h2 className="header__subtitle">We makes every day full of energy and taste</h2>
            <h2 className="header__subtitleShadow">Want to try our beans?</h2>
            <Link to="/ourcoffee">
                <button className="header__main">More</button>
            </Link>

        </header>
    )
}

export default Header;