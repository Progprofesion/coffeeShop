import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import SearchComponent from '../searchComponent/SearchComponent';
import Footer from '../footer/Footer';
import Humburger from '../hamburger/Hamburger';
import Basket from '../basket/BasketView';
import LoginView from '../auth/LoginView';
import LinkPage from '../linkPage/LinkPage';

import coffeeIcon from 'src/assets/coffeeIcon.svg';
import girlCoffee from 'src/assets/girlCoffee.svg';


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
                <LinkPage img={coffeeIcon}>
                    <Link to="/" >
                        <div className="fz-12">Coffee house</div>
                    </Link>
                    <Link to="/ourcoffee">
                        <div className="fz-12">Our coffee</div>
                    </Link>
                    <Link to="/pleasure">
                        <div className="fz-12">For your pleasure</div>
                    </Link>
                </LinkPage>
                <Humburger />
                <Basket />
                <LoginView />
                {/* <HeadBanner bg={bgOurCoffeePage} title='Our Coffee' /> */}
                <AboutOur img={girlCoffee} title={'About our beans'} />
                <SearchComponent />
                <CardsList cardsView={0} />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default OurCoffeePage;