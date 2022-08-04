import { useSelector } from 'react-redux';
import { useMemo } from 'react'
import { useGetProductsQuery } from '../api/apiSlice';

import CardsListItem from '../cardsListItem/cardsListItem';

const CardsList = () => {

    const {
        data: products = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    const activeFilter = useSelector(state => state.filters.activeFilter)

    const filteredHeroes = useMemo(() => {
        const filteredHeroes = products.slice();
        if (activeFilter === 'all') {
            return filteredHeroes;
        } else {
            return filteredHeroes.filter(item => item.variety === activeFilter);
        }
    }, [products, activeFilter]);


    if (isLoading) {
        return <h5>Loading</h5>
    } else if (isError) {
        return <h5>Error</h5>
    }

    const renderCards = (arr) => {
        if (arr.length === 0) {
            return <h5>Not item</h5>
        }

        return arr.map(({ id, ...props }) => {
            return <CardsListItem key={id} {...props} />
        })
    }

    const elements = renderCards(filteredHeroes)

    return (
        elements
    )



}

export default CardsList;