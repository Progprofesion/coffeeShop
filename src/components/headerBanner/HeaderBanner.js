import { Link } from 'react-router-dom';

import ExitLink from '../exitLink/ExitLink';
import LinkPage from '../linkPage/LinkPage';

import coffeeIcon from 'src/assets/coffeeIcon.svg';

import './headerBanner.scss';

const HeaderPages = ({ style, title }) => {
    return (
        <section className="headerBanner" style={style}>
            <LinkPage img={coffeeIcon}>
                <Link className="linkPage__link fz-14" to="/" >Coffee house</Link>
                <Link className="linkPage__link fz-14" to="/ourcoffee">Our coffee</Link>
                <Link className="linkPage__link fz-14" to="/pleasure">For your pleasure</Link>
                <Link className="linkPage__link fz-14" to="/basket">Basket</Link>
                <ExitLink />
            </LinkPage>
            <h2 className="headerBanner__title" >{title}</h2>
        </section>
    )
};

export default HeaderPages;