import { useMemo } from 'react';
import { useGetProductsQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import CardsListItem from '../cardsListItem/cardsListItem';

import './cardsList.scss';

const CardsList = () => {
    const {
        data: products = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    const activeFilter = useSelector(state => state.filters.activeFilter);
    const searchCoffee = useSelector(state => state.filters.searchCoffee);

    const searchCoffeeFiltered = useMemo(() => {
        const searchCoffeeFiltered = products.slice();
        if (searchCoffee === '') {
            return searchCoffeeFiltered;
        } else {
            return searchCoffeeFiltered.filter(item => {
                return item.title.toLowerCase().indexOf(searchCoffee.toLowerCase()) > -1
            })
        }
    }, [products, searchCoffee]);

    const filteredCards = useMemo(() => {
        const filteredCards = searchCoffeeFiltered.slice();
        if (activeFilter === 'all') {
            return filteredCards
        } else {
            return filteredCards.filter(item => item.variety === activeFilter);
        };
    }, [activeFilter, searchCoffeeFiltered]);


    if (isLoading) {
        return <h5>Loading</h5>
    } else if (isError) {
        return <h5>Error</h5>
    }


    const renderCardsList = (arr) => {
        if (arr.lenght === 0) {
            return <h5>Not products</h5>
        }

        return arr.map(({ id, ...props }) => {
            return <CardsListItem key={id} {...props} />
        });

    };


    const elements = renderCardsList(filteredCards);

    return (
        elements

    )

};

export default CardsList;