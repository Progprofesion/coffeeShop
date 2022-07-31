import { Link } from 'react-router-dom';

import './linkPageBlack.scss';
import coffeeIconBlack from '../linkPage/coffeeIconBlack.svg';



const LinkPageBlack = () => {
    return (
        <div className="linkPageBlack">
            <img className="linkPageBlack__img" src={coffeeIconBlack} alt="coffee" />
            <Link to='/'>
                <div className="fz-12Black" href='#'>Coffee house</div>
            </Link>
            <Link to='/ourcoffee'>
                <div className="fz-12Black" href='#'>Our coffee</div>
            </Link>
            <div className="fz-12Black" href='#'>For your pleasure</div>
        </div>
    )
}

export default LinkPageBlack;