import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import LinkPage from '../linkPage/LinkPage';
import pleasureAbout from '../../assets/pleasureAbout.svg';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
import Basket from '../basket/Basket';

import coffeeIcon from '../../assets/coffeeIcon.svg';
import './style/pleasure.scss';

const PleasurePage = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Page for your pleasure" />
                    <title>For your pleasure</title>
                </Helmet>
                <Hamburger />
                <header className="pleasure">
                    <Basket />
                    <div className="pleasure__bannerWrapp">
                        <div className="pleasure__header">
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
                            <h2 className="pleasure__title">For your pleasure</h2>
                        </div>
                    </div>
                </header>
                <AboutOur img={pleasureAbout} title={'About our goods'} />
                <CardsList cardsView={0} />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;