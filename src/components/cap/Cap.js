import { Link } from 'react-router-dom';

import LinkPage from '../linkPage/LinkPage';
import coffeeIcon from 'src/assets/coffeeIcon.svg';
import './cap.scss';

const Cap = () => {
    return (
        <div className="cap">
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
                <Link to="/basket">
                    <div className="fz-12">Basket</div>
                </Link>
            </LinkPage>

        </div>
    )
}

export default Cap