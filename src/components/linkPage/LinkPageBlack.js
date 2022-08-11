import { Link } from 'react-router-dom';

import coffeeIconBlack from '../../assets/coffeeIconBlack.svg';

import './style/linkPageBlack.scss';

const LinkPageBlack = () => {
    return (
        <nav className="linkPageBlack">
            <img className="linkPageBlack__img" src={coffeeIconBlack} alt="coffee" />
            <Link to='/'>
                <div className="linkPageBlack__descr fz-12Black">Coffee house</div>
            </Link>
            <Link to='/ourcoffee'>
                <div className="linkPageBlack__descr fz-12Black">Our coffee</div>
            </Link>
            <Link to="/pleasure">
                <div className="linkPageBlack__descr fz-12Black">For your pleasure</div>
            </Link>
        </nav>
    )
};

export default LinkPageBlack;