import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './cardsFilters.scss';
import { activeFilterChanged, selectAll, fetchFilters } from './cadsSlice';
import store from '../../store';
import { useHttp } from '../../hooks/http.hook';
import classNames from 'classnames';

const CardsFilters = () => {
    const { filtersLoadingStatus, activeFilter } = useSelector(state => state.filters);
    const filters = selectAll(store.getState());
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchFilters(request))
        // eslint-disable-next-line
    }, []);

    if (filtersLoadingStatus === 'loading') {
        return <h5>Loading</h5>
    } else if (filtersLoadingStatus === 'error') {
        return <h5>Error</h5>
    }

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h5>Not filters</h5>
        }
        return arr.map(({ name, label, className }) => {
            const btnClass = classNames('filter__btn', className, {
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
        <div className="filter">
            <h5 className="filter__title fz-14">Or filter</h5>
            {elements}
        </div>
    )
};

export default CardsFilters;