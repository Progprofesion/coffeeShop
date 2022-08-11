import { Link } from 'react-router-dom';

import coffeeIcon from '../../assets/coffeeIcon.svg';

import './style/linkPage.scss';

const LinkPage = () => {
    return (
        <nav className="linkPage">
            <img className="linkPage__img" src={coffeeIcon} alt="coffee" />
            <Link to="/" >
                <p className="fz-12">Coffee house</p>
            </Link>
            <Link to="/ourcoffee">
                <p className="fz-12">Our coffee</p>
            </Link>
            <Link to="/pleasure">
                <p className="fz-12">For your pleasure</p>
            </Link>
        </nav>
    )
        ;
}

export default LinkPage;