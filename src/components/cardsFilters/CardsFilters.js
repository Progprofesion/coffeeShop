import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './cardsFilters.scss';
import { activeFilterChanged, selectAll, fetchFilters } from 'src/store/slices/cadsFiltersSlice';
import store from 'src/store';
import classNames from 'classnames';

const CardsFilters = () => {
    const { filtersLoadingStatus, activeFilter } = useSelector(state => state.filters);
    const filters = selectAll(store.getState());
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchFilters())
        // eslint-disable-next-line
    }, []);


    if (filtersLoadingStatus === 'loading') {
        return <h5 className="cardsFilters__statusLoading">Loading...</h5>
    } else if (filtersLoadingStatus === 'error') {
        return <h5 className="cardsFilters__statusLoading">Error</h5>
    }

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h5>No filters</h5>
        }
        return arr.map(({ name, label, className }) => {
            const btnClass = classNames('cardsFilters__btn', className, {
                'active': name === activeFilter
            });
            return <button
                key={name}
                id={name}
                className={btnClass}
                onClick={() => dispatch(activeFilterChanged(name))}>

                {label}</button>
        })
    }
    const elements = renderFilters(filters)

    return (
        <div className="cardsFilters">
            <div className="container">
                <div className="cardsFilters__wrapper">
                    <div className="cardsFilters__title fz-14">Or filter</div>
                    {elements}
                </div>
            </div>
        </div>
    )
};

export default CardsFilters;