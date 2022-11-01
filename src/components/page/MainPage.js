import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from "../headerMain/HeaderMain";
import About from "../aboutUs/About";
import Best from "../best/Best";
import Footer from "../footer/Footer";
import Humburger from "../hamburger/Hamburger";
import BasketSticky from "../basket/BasketSticky";
import LoginView from '../auth/LoginView';
import CardsList from '../cardsList/CardsList';


const MainPage = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Coffee shop app" />
                    <title>Coffee house</title>
                </Helmet>
                <BasketSticky />
                <LoginView />
                <Humburger />
                <Header />
                {/* <About /> */}
                {/* <Best /> */}
                <CardsList
                    cardsView={3}
                    title={'Our best'} />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default MainPage;