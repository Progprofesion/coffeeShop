import { Link } from 'react-router-dom';

import ExitLink from '../exitLink/ExitLink';
import LinkPage from '../linkPage/LinkPage';
import { LinkPageInterface } from '../linkPage/LinkPage';

import coffeeIcon from 'src/assets/icons/coffeeIcon.svg';

import './headerBanner.scss';

const HeaderPages = ({ style, title }: LinkPageInterface) => {
    return (
        <section className="headerBanner" style={style}>
            <LinkPage img={coffeeIcon}>
                <Link className="linkPage__link fz-14" to="/main" >Coffee house</Link>
                <Link className="linkPage__link fz-14" to="/ourcoffee">Our coffee</Link>
                <Link className="linkPage__link fz-14" to="/pleasure">For your pleasure</Link>
                <Link className="linkPage__link fz-14" to="/faivorite">Faivorite</Link>
                <Link className="linkPage__link fz-14" to="/basket">Basket</Link>
                <ExitLink />
            </LinkPage>
            <div className="container">
                <h2 className="headerBanner__title">{title}</h2>
            </div>
        </section>
    )
};

export default HeaderPages; 