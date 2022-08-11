import LinkPage from '../linkPage/LinkPage';
import pleasureAbout from '../../assets/pleasureAbout.svg';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import './style/pleasure.scss';

const PleasurePage = () => {
    return (
        <>
            <header className="pleasure">
                <div className="pleasure__bannerWrapp">
                    <div className="pleasure__header">
                        <LinkPage />
                        <h2 className="pleasure__title">For your pleasure</h2>
                    </div>
                </div>
            </header>
            <AboutOur img={pleasureAbout} title={'About our goods'} />
            <CardsList />
            <Footer />
        </>
    )
};

export default PleasurePage;