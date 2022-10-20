import { useDispatch } from 'react-redux';

import { activeSearchCoffee } from 'src/store/slices/cadsFiltersSlice';

import CardsFilters from '../cardsFilters/CardsFilters';

import './searchComponent.scss';

const SearchComponent = () => {
    const dispatch = useDispatch();
    return (
        <section className="search">
            <div className="container">
                <div className="search__looking">
                    <div className="search__block">
                        <div className="search__block-title fz-14">Looking foor</div>
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
            </div>
        </section>
    )
};

export default SearchComponent;