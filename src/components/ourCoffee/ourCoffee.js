import './ourCoffee.scss';
import girlCoffee from './girlCoffee.svg';
import IconLineBlack from '../iconLine/IconLineBlack';
import LinkPageBlack from '../linkPage/LinkPageBlack';
import CardsFilters from '../cardsFilters/CardsFilters';
import CardsList from '../cardsList/CardsList';
import { useDispatch } from 'react-redux';

import { activeSearchCoffee } from '../cardsFilters/cadsFiltersSlice';

const OurCoffee = () => {

    const dispatch = useDispatch();

    return (
        <div className="ourcoffee">
            <div className="ourcoffee__about">
                <img src={girlCoffee} alt="" className="ourcoffee__girl" />
                <div className="ourcoffee__descr fz-24">
                    <div className="ourcoffee__title fz-24">About our beans</div>
                    <IconLineBlack />
                    <div className="ourcoffee__text fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                        <br />

                        Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions.<br />
                        As greatly removed calling pleased improve an. Last ask him cold feel <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                        is song that held help face.</div>
                </div>
            </div>
            <div className="ourcoffee__line"></div>
            <div className="ourcoffee__lookiing">
                <div className="ourcoffee__search">
                    <h5 className="ourcoffee__search-title fz-14">Looking foor</h5>
                    <form>
                        <input
                            type="text"
                            placeholder='start typing here...'
                            className="ourcoffee__search-input"
                            onChange={(e) => dispatch(activeSearchCoffee(e.target.value))} />

                    </form>

                </div>
                <CardsFilters />

            </div>
            <div className="ourcoffee__cards" >
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

export default OurCoffee;