import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeaderBanner from '../headerBanner/HeaderBanner';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
import BasketSticky from '../basket/BasketSticky';
import LoginView from '../auth/LoginView';

import bgPleasurePage from 'src/assets/bg/bgPleasurePage.webp';
import bgPleasure from 'src/assets/bg/bgPleasure.webp';


const PleasurePage = () => {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Page for your pleasure" />
                    <title>For your pleasure</title>
                </Helmet>
                <Hamburger />
                <BasketSticky />
                <LoginView />
                <HeaderBanner
                    img={''}
                    style={{
                        background: `url(${bgPleasurePage}) center / cover no-repeat`
                    }}
                    title={'For your pleasure'} />
                <CardsList
                    cardsView={0}
                    style={{ background: `url(${bgPleasure}) center / cover no-repeat` }}
                    props={{ background: 'aliceblue', boxShadow: 'rgba(168, 200, 210, 0.25) 0 10px 25px 10px' }}
                />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;