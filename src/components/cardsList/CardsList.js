import { useMemo, useEffect } from 'react';
import { useGetProductsQuery } from '../api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';

import SearchComponent from '../searchComponent/SearchComponent';
import Error from 'src/assets/icons/Error.gif';
import CardsListItem from '../cardsListItem/CardsListItem';
import SkeletonCardsList from '../skeleton/SkeletonCardsList';

import { startState } from 'src/store/slices/basketSlice';

import './cardsList.scss';

const CardsList = ({ cardsView, style, title, height, stateFaivorite }) => {

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
        if (!stateArrRender.length) {
            dispatch(startState(products))
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

    if (isError) {
        return <Error />
    }

    const renderCardsList = (arr) => {
        if (arr.lenght === 0) {
            return <h5>No products</h5>
        }
        // eslint-disable-next-line
        return arr.map(({ page, price, id, img, title, country, quantity, faivorite, ...rest }) => {
            if (page > cardsView || (stateFaivorite && faivorite)) {
                return isLoading ? <SkeletonCardsList key={page} />
                    : <CardsListItem
                        {...rest}
                        key={page}
                        price={price}
                        id={id}
                        img={img}
                        title={title}
                        country={country}
                        quantity={quantity}
                        faivorite={faivorite} />
            }
        });
    };

    const elements = renderCardsList(filteredCards);
    return (
        <section className="cardsList" style={style} >
            <div className="container">
                <h2 className="cardsList__title">{title}</h2>
                <div className="cardsList__bg" style={height}>
                    <SearchComponent />
                    <TransitionGroup className="cardsList__wrapper" >
                        {elements}
                    </TransitionGroup>
                </div>
            </div>
        </section >
    )
};

export default CardsList;