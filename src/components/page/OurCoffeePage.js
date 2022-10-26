import { Helmet, HelmetProvider } from 'react-helmet-async';


import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Humburger from '../hamburger/Hamburger';
import Basket from '../basket/BasketView';
import LoginView from '../auth/LoginView';

import girlCoffee from 'src/assets/girlCoffee.svg';
import bgCardsList from '../../assets/bgCardsList.jpg';


const OurCoffeePage = () => {
    console.log(bgCardsList)
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
                <AboutOur style={{
                    background: "url(/static/media/bgOurCoffeePage.9928212fb1eb01de6816.png) center / cover no-repeat"
                }}
                    title={'Our coffee'} />
                <CardsList cardsView={0}
                    style={{
                        background: "url(/static/media/bgBest.d188eb7d5a4a40d545af.png) center / cover no-repeat"
                    }}
                    bg={{ background: "url( /static/media/bgCardsList.22c60f5d290c3d585c1c.jpg) center / cover no-repeat" }} />
                <Footer />
            </HelmetProvider>
        </>

    )
}

export default OurCoffeePage;