import { Link } from 'react-router-dom';
import IconLine from '../iconLine/IconLine';
import LinkPage from '../linkPage/LinkPage';
import coffeeBeansIconWhite from 'src/assets/coffeeBeansIconWhite.svg'

import coffeeIcon from 'src/assets/coffeeIcon.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <LinkPage img={coffeeIcon} style={{ margin: '0 auto', display: 'flex' }}>
                <Link to='/'>
                    <div className="linkPageBlack__descr fz-12">Coffee house</div>
                </Link>
                <Link to='/ourcoffee'>
                    <div className="linkPageBlack__descr fz-12">Our coffee</div>
                </Link>
                <Link to="/pleasure">
                    <div className="linkPageBlack__descr fz-12">For your pleasure</div>
                </Link>
                <Link to="/basket">
                    <div className="fz-12">Basket</div>
                </Link>
            </LinkPage>
            <IconLine img={coffeeBeansIconWhite} style={{ border: '1px solid white' }} />
        </footer>
    )
};

export default Footer;