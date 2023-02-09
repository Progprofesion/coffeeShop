import { lazy } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import CardsList from '../cardsList/CardsList';
import LoginView from '../auth/LoginView';
import Sidebar from '../sidebar/Sidebar';
import Hamburger from '../hamburger/Hamburger';
import Comments from '../comments/Comments';

const Footer = lazy(() => import('../footer/Footer'));

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
                <LoginView />
                <Comments />
                <Sidebar />
                <CardsList
                    title='Coffee is a fruit'
                    cardsView={0}
                    addClassBg='addClassBg'
                    addClassCardsTitle='addClassCardsTitle'
                    addClassCards='addClassCards'
                />
                <Footer
                    styleImg={{ display: 'none' }}
                    addClass='fz-14Pleasure'
                    addClassFooter='addClassFooter' />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;