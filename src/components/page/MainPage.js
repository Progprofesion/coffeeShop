import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from "../header/Header";
import About from "../aboutUs/About";
import Best from "../best/best";
import Footer from "../footer/Footer";
import Burger from "../burger/Burger";

const MainPage = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Coffee shop app" />
                    <title>Coffee shop</title>
                </Helmet>
                <Burger />
                <Header />
                <About />
                <Best />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default MainPage;