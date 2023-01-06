import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeaderBanner from '../headerBanner/HeaderBanner';
import AboutUs from '../aboutUs/AboutUs';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Humburger from '../hamburger/Hamburger';
import BasketSticky from '../basket/BasketSticky';
import LoginView from '../auth/LoginView';

import bgOurCoffeePage from 'src/assets/bg/bgOurCoffeePage.png';


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
                <HeaderBanner
                    img={''}
                    style={{
                        background: `url(${bgOurCoffeePage}) center / cover no-repeat`
                    }}
                    title={'Our coffee'} />
                <AboutUs style={{ display: "none" }} />
                <CardsList
                    style={{ display: "block" }}
                    cardsView={0}
                    height={{ minHeight: '1000px' }}
                />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default OurCoffeePage;