import HeadBanner from '../headBanner/HeadBanner';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import SearchComponent from '../searchComponent/SearchComponent';
import Footer from '../footer/Footer';
import girlCoffee from '../aboutOur/girlCoffee.svg';

const OurCoffeePage = () => {
    return (
        <>
            <HeadBanner />
            <AboutOur img={girlCoffee} title={'About our beans'} />
            <SearchComponent />
            <CardsList />
            <Footer />
        </>
    )
}

export default OurCoffeePage;