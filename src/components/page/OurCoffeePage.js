import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeadBanner from '../headBanner/HeadBanner';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import SearchComponent from '../searchComponent/SearchComponent';
import Footer from '../footer/Footer';
import Humburger from '../hamburger/Hamburger';
import Basket from '../basket/Basket';
import LoginView from '../auth/LoginView';

import bgOurCoffeePage from 'src/assets/bgOurCoffeePage.png'
import girlCoffee from 'src/assets/girlCoffee.svg';


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
                <LoginView />
                <HeadBanner bg={bgOurCoffeePage} title='Our Coffee' />
                <AboutOur img={girlCoffee} title={'About our beans'} />
                <SearchComponent />
                <CardsList cardsView={0} />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default OurCoffeePage;