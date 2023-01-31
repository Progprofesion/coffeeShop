import { Helmet, HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react'

import HeaderMain from "../headerMain/HeaderMain";
import Footer from "../footer/Footer";
import Humburger from "../hamburger/Hamburger";
import BasketSticky from "../basket/BasketSticky";
import LoginView from '../auth/LoginView';
import AboutUs from '../aboutUs/AboutUs';

const Spinner = lazy(() => import('../spinner/Spinner'));
const CardsList = lazy(() => import('../cardsList/CardsList'));

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
                <Humburger />
                <LoginView />
                <HeaderMain />
                <AboutUs noneDescr={{ display: "none" }} />
                <Suspense fallback={<Spinner />} >
                    <CardsList
                        cardsView={3}
                        faivorite={true}
                        title={'  Our best! '}
                        props={{ minHeight: '565px' }}
                        style={{ minHeight: '950px' }} />
                </Suspense>
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default MainPage;