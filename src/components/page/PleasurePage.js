import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeaderPages from '../headerPages/HeaderPages';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
import BasketSticky from '../basket/BasketSticky';
import LoginView from '../auth/LoginView';

import bgPleasurePage from '../../assets/bgPleasurePage.jpg';
import bgPleasurePage1 from '../../assets/bgPleasurePage1.jpg';

const PleasurePage = () => {
    console.log(bgPleasurePage1)
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
                <HeaderPages style={{
                    background: "url(/static/media/bgPleasurePage.fe6ab9436eeb459ce2ab.png) center / cover no-repeat"
                }}
                    title={'For your pleasure'} />
                <CardsList cardsView={0}
                    style={{
                        background: "url(/static/media/bgPleasurePage.100b9e59949549f00cc0.jpg) center / cover no-repeat"
                    }} />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;