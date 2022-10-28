import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from "../header/Header";
import About from "../aboutUs/About";
import Best from "../best/Best";
import Footer from "../footer/Footer";
import Humburger from "../hamburger/Hamburger";
import Basket from "../basket/BasketView";
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
                <Basket />
                <LoginView />
                <Humburger />
                <Header />
                {/* <About /> */}
                {/* <Best /> */}
                <CardsList
                    cardsView={3}
                    title={'Our best'}
                    style={{
                        background: "url(/static/media/bgBest.d188eb7d5a4a40d545af.png) center / cover no-repeat"
                    }}
                    bg={{ background: "url( /static/media/bgCardsList.22c60f5d290c3d585c1c.jpg) center / cover no-repeat" }} />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default MainPage;