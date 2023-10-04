import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Hamburger from '../hamburger/Hamburger';
import LoginView from '../auth/LoginView';
import LinkPage from '../linkPage/LinkPage';
import CardsList from '../cardsList/CardsList';
import ExitLink from '../exitLink/ExitLink';
import BasketSticky from '../basket/BasketSticky';
import Footer from '../footer/Footer';

import coffeeIcon from 'src/assets/icons/coffeeIcon.svg';

const FaivoritePage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="Faivorite page" />
                <title>Faivorite</title>
            </Helmet>
            <section className="faivorite" style={{ background: "url(/static/media/bgMain.cc6573b53d9366175b87.webp) center / cover no-repeat", minHeight: '100vh' }}>
                <LinkPage style={{ margin: '0 auto' }} img={coffeeIcon}>
                    <Link className="linkPage__link fz-14" to="/main" >Coffee house</Link>
                    <Link className="linkPage__link fz-14" to="/ourcoffee">Our coffee</Link>
                    <Link className="linkPage__link fz-14" to="/pleasure">For your pleasure</Link>
                    <Link className="linkPage__link fz-14" to="/faivorite">Faivorite</Link>
                    <Link className="linkPage__link fz-14" to="/basket">Basket</Link>
                    <ExitLink />
                </LinkPage>
                <LoginView />
                <Hamburger />
                <BasketSticky />
                <CardsList
                    videoStyle={{ display: 'none' }}
                    title={'Faivorite'}
                    stateFaivorite={true}
                    addClassCards='addClassFaivorite' />
            </section>
            <Footer />

        </HelmetProvider>
    )
}

export default FaivoritePage