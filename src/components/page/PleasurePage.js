import { Helmet, HelmetProvider } from 'react-helmet-async';

import LinkPage from '../linkPage/LinkPage';
import pleasureAbout from '../../assets/pleasureAbout.svg';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
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
                    <div className="pleasure__bannerWrapp">
                        <div className="pleasure__header">
                            <LinkPage />
                            <h2 className="pleasure__title">For your pleasure</h2>
                        </div>
                    </div>
                </header>
                <AboutOur img={pleasureAbout} title={'About our goods'} />
                <CardsList />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;