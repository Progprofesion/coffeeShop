import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeadBanner from '../headBanner/HeadBanner';
import pleasureAbout from 'src/assets/pleasureAbout.svg';
import AboutOur from '../headerPages/HeaderPages';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
import BasketSticky from '../basket/BasketSticky';
import LoginView from '../auth/LoginView';

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
                <BasketSticky />
                <LoginView />
                <AboutOur style={{
                    background: "url(/static/media/bgPleasurePage.fe6ab9436eeb459ce2ab.png) center / cover no-repeat"
                }} title={'For your pleasure'} />
                <CardsList cardsView={0} />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;