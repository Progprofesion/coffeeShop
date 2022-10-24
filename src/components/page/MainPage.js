import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from "../header/Header";
import About from "../aboutUs/About";
import Best from "../best/best";
import Footer from "../footer/Footer";
import Humburger from "../hamburger/Hamburger";
import Basket from "../basket/BasketView";
import LoginView from '../auth/LoginView';


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
                {/* <Footer /> */}
            </HelmetProvider>
        </>
    )
}

export default MainPage;