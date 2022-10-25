import { useMemo, useEffect } from 'react';
import { useGetProductsQuery } from '../api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';

import SearchComponent from '../searchComponent/SearchComponent';
import Spinner from '../spinner/Spinner';
import Error from 'src/assets/Error.gif';
import CardsListItem from '../cardsListItem/cardsListItem';


import {
    statePrice,
    addProduct,
    decrementQuantity,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    startState
} from 'src/store/slices/basketSlice';

import './cardsList.scss';

const CardsList = ({ cardsView, style }) => {

    const {
        data: products = [],
        isLoading,
        isError,
        isSuccess
    } = useGetProductsQuery();

    const dispatch = useDispatch();

    const activeFilter = useSelector(state => state.filters.activeFilter);
    const searchCoffee = useSelector(state => state.filters.searchCoffee);
    const stateArrRender = useSelector(state => state.basket.stateStartArr);

    useEffect(() => {
        if (stateArrRender.length < 6) {
            dispatch(startState(products))
        } else {
            dispatch(startState(stateArrRender))
        }
        // eslint-disable-next-line
    }, [isSuccess])

    const searchCoffeeFiltered = useMemo(() => {
        const searchCoffeeFiltered = stateArrRender.slice();
        if (searchCoffee === '') {
            return searchCoffeeFiltered;
        } else {
            return searchCoffeeFiltered.filter(item => {
                return item.title.toLowerCase().indexOf(searchCoffee.toLowerCase()) > -1
            })
        }
    }, [searchCoffee, stateArrRender]);

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
        // eslint-disable-next-line
        return arr.map(({ page, price, id, img, title, country, quantity }) => {
            const basketIncr = (e) => {
                e.preventDefault();
                addItem()
                dispatch(statePrice({ price }))
                dispatch(activeIncrTotals(price))
            };

            const addItem = () => {
                const item = {
                    id,
                    img,
                    title,
                    country,
                    price,
                }
                dispatch(addProduct(item))
            };

            const basketDecr = (e) => {
                e.preventDefault();
                dispatch(statePrice({ price }))
                if (quantity > 0) {
                    dispatch(activeDecrTotals(price))
                }
                dispatch(decrementQuantity(id))
                dispatch(removeProduct(id))
            };
            if (page > cardsView) {
                return <CardsListItem
                    key={page}
                    price={price}
                    id={id}
                    img={img}
                    title={title}
                    country={country}
                    quantity={quantity}
                    basketIncr={basketIncr}
                    basketDecr={basketDecr} />
            }
        });
    };

    const elements = renderCardsList(filteredCards);
    return (
        <section className="cardsList" style={style} >
            <div className="container">
                <SearchComponent />
                <div className="cardsList__wrapper">
                    {elements}
                </div>
            </div>
        </section>
    )

};

export default CardsList;