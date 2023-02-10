import { useMemo, useEffect } from 'react';
import { useGetProductsQuery } from '../components/api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store/index';
import { Trender } from '../components/cardsList/CardsList';
import { startState } from 'src/store/slices/basketSlice';

const useFilters = () => {

    const {
        data: products = [],
        isSuccess
    } = useGetProductsQuery(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!stateArrRender.length) {
            dispatch(startState(products))
        }
        // eslint-disable-next-line
    }, [isSuccess])

    const activeFilter = useSelector((state: RootState) => state.filters.activeFilter);
    const searchCoffee = useSelector((state: RootState) => state.filters.searchCoffee);
    const stateArrRender = useSelector((state: RootState) => state.basket.stateStartArr);

    const searchCoffeeFiltered = useMemo(() => {
        const searchCoffeeFiltered = stateArrRender.slice();
        if (searchCoffee === '') {
            return searchCoffeeFiltered;
        } else {
            return searchCoffeeFiltered.filter((item: Record<string, string>) => {
                return item.title.toLowerCase().indexOf(searchCoffee.toLowerCase()) > -1
            })
        }
    }, [searchCoffee, stateArrRender]);

    const filteredCards: Trender[] = useMemo(() => {
        const filteredCards = searchCoffeeFiltered.slice();
        if (activeFilter === 'all') {
            return filteredCards
        } else {
            return filteredCards.filter((item: Record<string, string>) => item.country === activeFilter);
        }
    }, [activeFilter, searchCoffeeFiltered]);

    return { filteredCards }

}

export default useFilters