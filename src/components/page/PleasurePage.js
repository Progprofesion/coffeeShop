import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeaderBanner from '../headerBanner/HeaderBanner';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
import BasketSticky from '../basket/BasketSticky';
import LoginView from '../auth/LoginView';
import bgPleasure from 'src/assets/bgPleasure.jpg';

const PleasurePage = () => {
    console.log(bgPleasure)
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
                    style={{
                        background: "url(/static/media/bgPleasurePage.fe6ab9436eeb459ce2ab.png) center / cover no-repeat"
                    }}
                    title={'For your pleasure'} />
                <CardsList
                    cardsView={0}
                    style={{ background: 'url(/static/media/bgPleasure.a7f47f19fc96c8d06797.jpg) center / cover no-repeat' }}
                    height={{ 'minHeight': '624px' }}
                />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;