import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeadBanner from '../headBanner/HeadBanner';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import SearchComponent from '../searchComponent/SearchComponent';
import Footer from '../footer/Footer';
import Humburger from '../hamburger/Hamburger';
import Basket from '../basket/Basket';
import girlCoffee from '../../assets/girlCoffee.svg';

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
                <Basket />
                <HeadBanner />
                <AboutOur img={girlCoffee} title={'About our beans'} />
                <SearchComponent />
                <CardsList />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default OurCoffeePage;