import './ourCoffee.scss';
// import girlCoffee from './girlCoffee.svg';
// import IconLineBlack from '../iconLine/IconLineBlack';
import AboutOurBeans from '../aboutOurBeans/AboutOurBeans';
import CardsFilters from '../cardsFilters/CardsFilters';
import CardsList from '../cardsList/CardsList';
import Footer from '../footer/Footer';
import { useDispatch } from 'react-redux';

import { activeSearchCoffee } from '../cardsFilters/cadsFiltersSlice';

const OurCoffee = () => {

    const dispatch = useDispatch();

    return (
        <section className="ourcoffee">
            <div className="ourcoffee__lookiing">
                <div className="ourcoffee__search">
                    <p className="ourcoffee__search-title fz-14">Looking foor</p>
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
            <section className="ourcoffee__cards" >
                <CardsList />
            </section>
            <Footer />
        </section>
    )
};

export default OurCoffee;