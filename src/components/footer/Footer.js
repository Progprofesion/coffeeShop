import { Link } from 'react-router-dom';
import IconLine from '../iconLine/IconLine';
import LinkPage from '../linkPage/LinkPage';
import ExitLink from '../exitLink/ExitLink';
import coffeeBeansIconWhite from 'src/assets/coffeeBeansIconWhite.svg'

import coffeeIcon from 'src/assets/coffeeIcon.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <LinkPage img={coffeeIcon} style={{ margin: '0 auto', display: 'flex' }}>
                <Link className="fz-14" to="/" >Coffee house</Link>
                <Link className="fz-14" to="/ourcoffee">Our coffee</Link>
                <Link className="fz-14" to="/pleasure">For your pleasure</Link>
                <Link className="fz-14" to="/basket">Basket</Link>
                <ExitLink />
            </LinkPage>
            <IconLine img={coffeeBeansIconWhite} style={{ border: '1px solid white' }} />
        </footer>
    )
};

export default Footer;