import { Link } from 'react-router-dom';

import IconLine from "../iconLine/IconLine";
import coffeeBeansIconWhite from '../../assets/coffeeBeansIconWhite.svg'

import LinkPage from '../linkPage/LinkPage';
import coffeeIcon from '../../assets/coffeeIcon.svg';

import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <LinkPage img={coffeeIcon}>
                <Link to="/" >
                    <div className="fz-12">Coffee house</div>
                </Link>
                <Link to="/ourcoffee">
                    <div className="fz-12">Our coffee</div>
                </Link>
                <Link to="/pleasure">
                    <div className="fz-12">For your pleasure</div>
                </Link>
            </LinkPage>
            <div className="container">
                <h1 className="header__title">Everything You Love About Coffee</h1>
                <IconLine img={coffeeBeansIconWhite} style={{ border: '1px solid white' }} />
                <h2 className="header__subtitle">We makes every day full of energy and taste</h2>
                <h2 className="header__subtitleShadow">Want to try our beans?</h2>
                <Link to="/ourcoffee">
                    <button className="header__main">More</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;