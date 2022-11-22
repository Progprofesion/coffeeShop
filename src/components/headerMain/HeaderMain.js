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
                <Link className="fz-14" to="/" >Coffee house</Link>
                <Link className="fz-14" to="/ourcoffee">Our coffee</Link>
                <Link className="fz-14" to="/pleasure">For your pleasure</Link>
                <Link className="fz-14" to="/basket">Basket</Link>
                <Link className="fz-14" to="/basket">Exit</Link>
            </LinkPage>
            <div className="container">
                <h1 className="headerMain__title">Everything You Love About <span>Coffee</span></h1>
                <IconLine img={coffeeBeansIconWhite} style={{ border: '1px solid white' }} />
                <h2 className="headerMain__subtitle">We makes every day full of <span>energy</span> and <span>taste</span> <p>Want to try our beans?</p></h2>
                <Link className="headerMain__wrapperBtn" to="/ourcoffee">
                    <button className="headerMain__mainBtn"><span>More</span></button>
                </Link>
            </div>
        </header>
    )
}

export default HeaderMain;