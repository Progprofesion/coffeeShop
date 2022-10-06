import { Link } from 'react-router-dom';

import LinkPage from '../linkPage/LinkPage';
import coffeeIcon from '../../assets/coffeeIcon.svg';

import './headBanner.scss';

const HeadBanner = () => {
    return (
        <header className="banner">
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
            </LinkPage>
            <div className="container">
                <h2 className="banner__title">Our Coffee</h2>
            </div>
        </header>
    )
};

export default HeadBanner;