import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeadBanner from '../headBanner/HeadBanner';
import pleasureAbout from 'src/assets/pleasureAbout.svg';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
import Basket from '../basket/BasketView';
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
                <Basket />
                <LoginView />
                <AboutOur style={{
                    background: "url(/static/media/bgPleasurePage.fe6ab9436eeb459ce2ab.png) center / cover no-repeat"
                }} title={'For your pleasure'} />
                <CardsList cardsView={0} style={{
                    background: "url(/static/media/bgBest.d188eb7d5a4a40d545af.png) center / cover no-repeat"
                }} />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;