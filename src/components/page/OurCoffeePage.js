import { Helmet, HelmetProvider } from 'react-helmet-async';


import AboutOur from '../headerPages/HeaderPages';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Humburger from '../hamburger/Hamburger';
import BasketSticky from '../basket/BasketSticky';
import LoginView from '../auth/LoginView';

import bgCardsList from '../../assets/bgCardsList.jpg';
import bgOurCoffeePage from '../../assets/bgOurCoffeePage.png';
import bgPleasurePage from '../../assets/bgPleasurePage.png';


const OurCoffeePage = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Page our coffee" />
                    <title>Our coffee</title>
                </Helmet>
                <Humburger />
                <BasketSticky />
                <LoginView />
                <AboutOur style={{
                    background: "url(/static/media/bgOurCoffeePage.9928212fb1eb01de6816.png) center / cover no-repeat"
                }}
                    title={'Our coffee'} />
                <CardsList cardsView={0} />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default OurCoffeePage;