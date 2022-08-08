import LinkPage from '../linkPage/LinkPage';
import pleasureAbout from './img/pleasureAbout.svg';
import IconLineBlack from '../iconLine/IconLineBlack';
import LinkPageBlack from '../linkPage/LinkPageBlack';
import CardsList from '../cardsList/CardsList';
import './pleasure.scss';

const PleasurePage = () => {
    return (
        <div className="pleasure">
            <div className="pleasure__bannerWrapp">
                <div className="pleasure__header">
                    <LinkPage />
                    <h2 className="pleasure__title">For your pleasure</h2>
                </div>
            </div>
            <div className="pleasure__about">
                <img src={pleasureAbout} alt="" className="pleasure__coffeeImg" />
                <div className="pleasure__descr fz-24">
                    <div className="pleasure__subtitle fz-24">About our beans</div>
                    <IconLineBlack />
                    <div className="pleasure__text fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions.<br />
                        As greatly removed calling pleased improve an. Last ask him cold feel <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                        is song that held help face.</div>
                </div>
            </div>
            <div className="pleasure__line"></div>
            <div className="pleasure__cards" >
                <CardsList />
            </div>
            <div className="ourcoffee__footer">
                <div className="ourcoffee__footer-link">
                    <LinkPageBlack />
                </div>
                <IconLineBlack />
            </div>

        </div>
    )
}

export default PleasurePage;