import { Link } from 'react-router-dom';

import ExitLink from '../exitLink/ExitLink';
import IconLine from "../iconLine/IconLine";

import LinkPage from '../linkPage/LinkPage';
import coffeeBeansIconWhite from 'src/assets/icons/coffeeBeansIconWhite.svg'
import coffeeIcon from 'src/assets/icons/coffeeIcon.svg';

import './headerMain.scss';

const HeaderMain = () => {
    return (
        <header className="headerMain">
            <LinkPage img={coffeeIcon}>
                <Link className="linkPage__link fz-14" to="/" >Coffee house</Link>
                <Link className="linkPage__link fz-14" to="/ourcoffee">Our coffee</Link>
                <Link className="linkPage__link fz-14" to="/pleasure">For your pleasure</Link>
                <Link className="linkPage__link fz-14" to="/basket">Basket</Link>
                <ExitLink />
            </LinkPage>
            <div className="container">
                <h1 className="headerMain__title">Everything You Love About <span>Coffee</span></h1>
                <IconLine img={coffeeBeansIconWhite} />
                <h2 className="headerMain__subtitle">We makes every day full of <span>energy</span> and <span>taste</span> <p>Want to try our beans?</p></h2>
                <Link className="headerMain__wrapperBtn" to="/ourcoffee">
                    <button className="headerMain__mainBtn"><span>More</span></button>
                </Link>
            </div>
        </header>
    )
}

export default HeaderMain;