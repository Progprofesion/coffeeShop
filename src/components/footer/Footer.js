import { Link } from 'react-router-dom';
import IconLine from '../iconLine/IconLine';
import LinkPage from '../linkPage/LinkPage';
import ExitLink from '../exitLink/ExitLink';
import coffeeBeansIconWhite from 'src/assets/icons/coffeeBeansIconWhite.svg'

import coffeeIcon from 'src/assets/icons/coffeeIcon.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <LinkPage img={coffeeIcon} style={{ margin: '0 auto', display: 'flex' }}>
                <Link className="linkPage__link fz-14" to="/" >Coffee house</Link>
                <Link className="linkPage__link fz-14" to="/ourcoffee">Our coffee</Link>
                <Link className="linkPage__link fz-14" to="/pleasure">For your pleasure</Link>
                <Link className="linkPage__link fz-14" to="/basket">Basket</Link>
                <Link className="linkPage__link fz-14" to="/faivorite">Faivorite</Link>
                <ExitLink />
            </LinkPage>
            <IconLine img={coffeeBeansIconWhite} />
        </footer>
    )
};

export default Footer;