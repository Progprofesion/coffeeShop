import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeaderBanner from '../headerBanner/HeaderBanner';
import AboutUs from '../aboutUs/AboutUs';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Humburger from '../hamburger/Hamburger';
import BasketSticky from '../basket/BasketSticky';
import LoginView from '../auth/LoginView';

import bgOurCoffeePage from 'src/assets/bg/bgOurCoffeePage.webp';


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
                    style={{
                        background: `url(${bgOurCoffeePage}) center / cover no-repeat`
                    }}
                    title={'Our coffee'} />
                <AboutUs style={{ display: "none" }} />
                <CardsList
                    videoStyle={{ display: 'none' }}
                    style={{ display: "block" }}
                    cardsView={0}
                    addClassCards='addClassCards'
                />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default OurCoffeePage;