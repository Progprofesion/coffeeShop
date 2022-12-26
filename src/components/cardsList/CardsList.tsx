import { useMemo, useEffect } from 'react';
import { useGetProductsQuery } from '../api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import { RootState } from 'src/store/index';

import SearchComponent from '../searchComponent/SearchComponent';
import Error from 'src/assets/icons/Error.gif';
import CardsListItem from '../cardsListItem/CardsListItem';
import SkeletonCardsList from '../skeleton/SkeletonCardsList';

import { startState } from 'src/store/slices/basketSlice';

import './cardsList.scss';

interface CardListInterface {
    cardsView: number
    style: React.CSSProperties
    title: string
    height: React.CSSProperties
    stateFaivorite: boolean
}

interface arrInterface {
    page: number
    price: number
    id: number
    img: string
    title: string
    country: string
    quantity: number
    faivorite: boolean
}

interface filteredCardsInterface {
    filteredCards: any
}

const CardsList = ({ cardsView, style, title, height, stateFaivorite }: CardListInterface) => {

    const {
        data: products = [],
        isLoading,
        isError,
        isSuccess
    } = useGetProductsQuery(null);

    const dispatch = useDispatch();

    const activeFilter = useSelector((state: RootState) => state.filters.activeFilter);
    const searchCoffee = useSelector((state: RootState) => state.filters.searchCoffee);
    const stateArrRender = useSelector((state: RootState) => state.basket.stateStartArr);

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
            return searchCoffeeFiltered.filter((item: Record<string, string>) => {
                return item.title.toLowerCase().indexOf(searchCoffee.toLowerCase()) > -1
            })
        }
    }, [searchCoffee, stateArrRender]);

    const filteredCards = useMemo<any>(() => {
        const filteredCards = searchCoffeeFiltered.slice();
        if (activeFilter === 'all') {
            return filteredCards
        } else {
            return filteredCards.filter((item: Record<string, string>) => item.country === activeFilter);
        }
    }, [activeFilter, searchCoffeeFiltered]);

    if (isError) {
        return <Error />
    }

    const renderCardsList = (arr: []) => {
        if (arr.length === 0) {
            return <h5>No products</h5>
        }
        // eslint-disable-next-line
        return arr.map(({ page, price, id, img, title, country, quantity, faivorite, ...rest }: arrInterface) => {
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