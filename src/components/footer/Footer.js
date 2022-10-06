import { Link } from 'react-router-dom';
import IconLine from '../iconLine/IconLine';
import LinkPage from '../linkPage/LinkPage';
import coffeeIconBlack from '../../assets/coffeeIconBlack.svg';

import coffeeBeansIconBlack from '../../assets/coffeeBeansIconBlack.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <LinkPage img={coffeeIconBlack} style={{ margin: '0 auto' }}>
                <Link to='/'>
                    <div className="linkPageBlack__descr fz-12Black">Coffee house</div>
                </Link>
                <Link to='/ourcoffee'>
                    <div className="linkPageBlack__descr fz-12Black">Our coffee</div>
                </Link>
                <Link to="/pleasure">
                    <div className="linkPageBlack__descr fz-12Black">For your pleasure</div>
                </Link>
            </LinkPage>
            <IconLine img={coffeeBeansIconBlack} />
        </footer>
    )
};

export default Footer;