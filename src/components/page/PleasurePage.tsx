import { Helmet, HelmetProvider } from 'react-helmet-async';


import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
import BasketSticky from '../basket/BasketSticky';
import LoginView from '../auth/LoginView';
import RightMeny from '../rightMenu/RightMeny';


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
                <RightMeny />
                <CardsList
                    cardsView={0}
                    style={{ background: `none` }}
                    props={{ background: 'aliceblue', boxShadow: 'rgba(168, 200, 210, 0.25) 0 10px 25px 10px' }}
                />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;