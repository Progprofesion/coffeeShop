import { Link } from 'react-router-dom';

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
        <>
            <section className="faivorite" style={{ background: "url(/static/media/bgMain.9e5017213a32dfd782e1.jpg) center / cover no-repeat", minHeight: '100vh' }}>
                <LinkPage img={coffeeIcon}>
                    <Link className="linkPage__link fz-14" to="/" >Coffee house</Link>
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
                    title={'Faivorite'}
                    stateFaivorite={true}
                    style={{ background: 'none' }} />
            </section>
            <Footer />
        </>
    )
}

export default FaivoritePage