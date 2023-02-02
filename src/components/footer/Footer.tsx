import { Link } from 'react-router-dom';
import IconLine from '../iconLine/IconLine';
import LinkPage from '../linkPage/LinkPage';
import ExitLink from '../exitLink/ExitLink';
import coffeeBeansIconWhite from 'src/assets/icons/coffeeBeansIconWhite.svg'

import coffeeIcon from 'src/assets/icons/coffeeIcon.svg';

import './footer.scss';

interface FoterType {
    bgFooter?: React.CSSProperties;
    addClass?: any;
}

const Footer = ({ bgFooter, addClass }: FoterType) => {
    return (
        <footer className="footer" style={bgFooter}>
            <LinkPage img={coffeeIcon} style={{ margin: '0 auto', display: 'flex' }}>
                <Link className={`linkPage__link ${addClass}`} to="/main" >Coffee house</Link>
                <Link className={`linkPage__link ${addClass}`} to="/ourcoffee">Our coffee</Link>
                <Link className={`linkPage__link ${addClass}`} to="/pleasure">For your pleasure</Link>
                <Link className={`linkPage__link ${addClass}`} to="/faivorite">Faivorite</Link>
                <Link className={`linkPage__link ${addClass}`} to="/basket">Basket</Link>
                <ExitLink addClass={addClass} />
            </LinkPage>
            <IconLine img={coffeeBeansIconWhite} />
        </footer>
    )
};

export default Footer;