import HeadBanner from '../headBanner/HeadBanner';
import AboutOurBeans from '../aboutOurBeans/AboutOurBeans';
import CardsList from '../cardsList/CardsList';
import SearchComponent from '../searchComponent/SearchComponent';
import Footer from '../footer/Footer';

const OurCoffeePage = () => {
    return (
        <>
            <HeadBanner />
            <AboutOurBeans />
            <SearchComponent />
            <CardsList />
            <Footer />
        </>
    )
}

export default OurCoffeePage;