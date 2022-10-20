import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import LinkPage from '../linkPage/LinkPage';
import coffeeIcon from 'src/assets/coffeeIcon.svg';

import './headBanner.scss';

const HeadBanner = ({ bg, title }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="Page our Coffee" />
            </Helmet>
            <header className="banner">
                <img className='banner__bg' src={bg} alt="headBg" />
                <LinkPage img={coffeeIcon} style={{ top: '-250px' }} >
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
                <h2 className="banner__title">{title}</h2>
            </header>

        </HelmetProvider>

    )
};

export default HeadBanner;