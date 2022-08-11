import { Link } from 'react-router-dom';

import coffeeIconBlack from '../../assets/coffeeIconBlack.svg';

import './style/linkPageBlack.scss';

const LinkPageBlack = () => {
    return (
        <nav className="linkPageBlack">
            <img className="linkPageBlack__img" src={coffeeIconBlack} alt="coffee" />
            <Link to='/'>
                <div className="fz-12Black" href='#'>Coffee house</div>
            </Link>
            <Link to='/ourcoffee'>
                <div className="fz-12Black" href='#'>Our coffee</div>
            </Link>
            <Link to="/pleasure">
                <div className="fz-12Black" href='#'>For your pleasure</div>
            </Link>
        </nav>
    )
};

export default LinkPageBlack;