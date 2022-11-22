import { Link } from 'react-router-dom';

import IconLine from "../iconLine/IconLine";
import coffeeBeansIconWhite from 'src/assets/coffeeBeansIconWhite.svg'

import LinkPage from '../linkPage/LinkPage';
import coffeeIcon from 'src/assets/coffeeIcon.svg';

import './headerMain.scss';

const HeaderMain = () => {
    return (
        <header className="headerMain">
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
            <div className="container">
                <h1 className="headerMain__title">Everything You Love About <span>Coffee</span></h1>
                <IconLine img={coffeeBeansIconWhite} style={{ border: '1px solid white' }} />
                <h2 className="headerMain__subtitle">We makes every day full of energy and taste</h2>
                <h2 className="headerMain__subtitleShadow">Want to try our beans?</h2>
                <Link className="headerMain__wrapperBtn" to="/ourcoffee">
                    <button className="headerMain__mainBtn"><span>More</span></button>
                </Link>
            </div>
        </header>
    )
}

export default HeaderMain;