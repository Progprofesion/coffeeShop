import { useMemo, useEffect } from 'react';
import { useGetProductsQuery } from '../api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../spinner/Spinner';
import Error from '../../assets/Error.gif';
import CardsListItem from '../cardsListItem/cardsListItem';

import { activeStateBasket, addProduct, stateArr } from '../basket/basketSlice';


import './cardsList.scss';

const CardsList = () => {

    const {
        data: products = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    const dispatch = useDispatch();



    const activeFilter = useSelector(state => state.filters.activeFilter);
    const searchCoffee = useSelector(state => state.filters.searchCoffee);
    const state = useSelector(state => state.basket.stateBasket);
    const addProductTest = useSelector(state => state.basket.items);
    const stateArrF = useSelector(state => state.basket.stateArr);

    localStorage.setItem('stateArr', JSON.stringify(products))

    useEffect(() => {
        if (localStorage.getItem('stateArr')) {
            dispatch(stateArr(JSON.parse(localStorage.getItem('stateArr'))))
        } else {
            dispatch(stateArr(products))
            localStorage.setItem('stateArr', JSON.stringify(stateArrF))
        }


    }, [isLoading])


    console.log(stateArrF)
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
            return filteredCards.filter(item => item.country === activeFilter);
        };

    }, [activeFilter, searchCoffeeFiltered]);



    if (isLoading) {
        return <div><Spinner /></div>
    } else if (isError) {
        return <div><Error /></div>
    }


    const renderCardsList = (arr) => {
        if (arr.lenght === 0) {
            return <h5>No products</h5>
        }

        return arr.map(({ page, ...props }) => {
            return <CardsListItem key={page} {...props} />
        });

    };

    const elements = renderCardsList(stateArrF);


    return (
        <section className="cardsList" >
            <div className="container">
                <div className="cardsList__wrapper">
                    {elements}
                </div>
            </div>
        </section>
    )
};

export default CardsList;