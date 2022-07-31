import { Link } from 'react-router-dom';

import coffeeIconBlack from '../linkPage/coffeeIconBlack.svg';
import './linkPageBlack.scss';


const LinkPageBlack = () => {
    return (
        <div className="linkPageBlack">
            <img className="linkPageBlack__img" src={coffeeIconBlack} alt="coffee" />
            <a className="fz-12Black" href='#'>Coffee house</a>
            <a className="fz-12Black" href='#'>Our coffee</a>
            <a className="fz-12Black" href='#'>For your pleasure</a>
        </div>
    )
}

export default LinkPageBlack;