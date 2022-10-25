import { Helmet, HelmetProvider } from 'react-helmet-async';


import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Humburger from '../hamburger/Hamburger';
import Basket from '../basket/BasketView';
import LoginView from '../auth/LoginView';

import girlCoffee from 'src/assets/girlCoffee.svg';
import bgBest from '../../assets/bgBest.png';


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
                {/* <HeadBanner bg={bgOurCoffeePage} title='Our Coffee' /> */}
                <AboutOur img={girlCoffee} title={'About our beans'} />
                <CardsList cardsView={0} />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default OurCoffeePage;