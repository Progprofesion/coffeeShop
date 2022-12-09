import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeaderMain from "../headerMain/HeaderMain";
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
                <HeaderMain />
                <CardsList
                    cardsView={3}
                    title={'Our best'}
                    height={{ minHeight: '565px' }} />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default MainPage;