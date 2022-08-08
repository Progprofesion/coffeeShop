import { Link } from 'react-router-dom';

import './linkPage.scss';
import coffeeIcon from './coffeeIcon.svg'

const LinkPage = () => {
    return (
        <div className="linkPage">
            <img className="linkPage__img" src={coffeeIcon} alt="coffee" />
            <Link to="/" >
                <div className="fz-12" href='#'>Coffee house</div>
            </Link>
            <Link to="/ourcoffee">
                <div className="fz-12" href='#'>Our coffee</div>
            </Link>
            <Link to="/pleasure">
                <div className="fz-12" href='#'>For your pleasure</div>
            </Link>
        </div>
    )
}

export default LinkPage;