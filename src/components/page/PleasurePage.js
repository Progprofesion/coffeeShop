import LinkPage from '../linkPage/LinkPage';
import pleasureAbout from './img/pleasureAbout.svg';
import AboutOur from '../aboutOur/AboutOur';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import './style/pleasure.scss';

const PleasurePage = () => {
    return (
        <div className="pleasure">
            <header className="pleasure__bannerWrapp">
                <div className="pleasure__header">
                    <LinkPage />
                    <h2 className="pleasure__title">For your pleasure</h2>
                </div>
            </header>
            <AboutOur img={pleasureAbout} title={'About our goods'} />
            <CardsList />
            <Footer />
        </div>
    )
};

export default PleasurePage;