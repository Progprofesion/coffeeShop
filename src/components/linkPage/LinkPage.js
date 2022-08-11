import { Link } from 'react-router-dom';

import coffeeIcon from '../../assets/coffeeIcon.svg';

import './style/linkPage.scss';

const LinkPage = () => {
    return (
        <nav className="linkPage">
            <img className="linkPage__img" src={coffeeIcon} alt="coffee" />
            <Link to="/" >
                <div className="fz-12">Coffee house</div>
            </Link>
            <Link to="/ourcoffee">
                <div className="fz-12">Our coffee</div>
            </Link>
            <Link to="/pleasure">
                <div className="fz-12">For your pleasure</div>
            </Link>
        </nav>
    )
};

export default LinkPage;