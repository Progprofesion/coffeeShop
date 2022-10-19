import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import HeadBanner from '../headBanner/HeadBanner';
import LinkPage from '../linkPage/LinkPage';
import pleasureAbout from '../../assets/pleasureAbout.svg';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
import Basket from '../basket/Basket';
import LoginView from '../auth/LoginView';

import bgPleasurePage from '../../assets/bgPleasurePage.png';

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
                <Basket />
                <LoginView />
                <header className="pleasure">
                    <HeadBanner bg={bgPleasurePage} title="For your pleasure" />
                </header>
                <AboutOur img={pleasureAbout} title='About our goods' />
                <CardsList cardsView={0} />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default PleasurePage;