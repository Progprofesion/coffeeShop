
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeFilterChanged, selectAll, fetchFilters } from './cadsSlice';
import { useHttp } from '../../hooks/http.hook';

import store from '../../store/index';

import classNames from 'classnames';

import './cardsFilters.scss';


const CardsFilters = () => {

    const { filtersLoadingStatus, activeFilter } = useSelector(state => state.filters);

    const filters = selectAll(store.getState());

    const { request } = useHttp();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchFilters(request));
        // eslint-disable-next-line
    }, []);

    if (filtersLoadingStatus === "loading") {
        return <div>Loading</div>;
    } else if (filtersLoadingStatus === "error") {
        return <h5 >Ошибка загрузки</h5>
    }

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h5 >Фильтры не найдены</h5>
        }

        return arr.map(({ name, className, label }) => {

            const btnClass = classNames('filter', className, {
                'active': name === activeFilter
            });

            return <button
                key={name}
                id={name}
                className={btnClass}
                onClick={() => dispatch(activeFilterChanged(name))}
            >{label}</button>
        })
    }

    const elements = renderFilters(filters)

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default CardsFilters;