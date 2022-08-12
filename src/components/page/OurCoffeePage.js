import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeadBanner from '../headBanner/HeadBanner';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import SearchComponent from '../searchComponent/SearchComponent';
import Footer from '../footer/Footer';
import girlCoffee from '../../assets/girlCoffee.svg';

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
                <HeadBanner />
                <AboutOur img={girlCoffee} title={'About our beans'} />
                <SearchComponent />
                <CardsList />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default OurCoffeePage;