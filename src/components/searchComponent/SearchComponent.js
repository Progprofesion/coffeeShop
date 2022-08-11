import { useDispatch } from 'react-redux';

import { activeSearchCoffee } from '../cardsFilters/cadsFiltersSlice';

import CardsFilters from '../cardsFilters/CardsFilters';

import './searchComponent.scss';

const SearchComponent = () => {
    const dispatch = useDispatch();
    return (
        <section className="search">
            <div className="search__looking">
                <div className="search__block">
                    <p className="search__block-title fz-14">Looking foor</p>
                    <form>
                        <input
                            type="text"
                            placeholder='start typing here...'
                            className="search__block-input"
                            onChange={(e) => dispatch(activeSearchCoffee(e.target.value))} />
                    </form>
                </div>
                <CardsFilters />
            </div>
        </section>
    )
};

export default SearchComponent;