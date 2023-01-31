import { Helmet, HelmetProvider } from 'react-helmet-async';


import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import BasketSticky from '../basket/BasketSticky';
import LoginView from '../auth/LoginView';
import Sidebar from '../sidebar/Sidebar';


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
                <BasketSticky />
                <LoginView />
                <Sidebar />
                <CardsList
                    title='Coffee is a fruit'
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