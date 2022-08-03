import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useGetProductsQuery } from '../api/apiSlice';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import CardsListItem from "../cardsListItem/cardsListItem";

import './cardsList.scss';

const CardsList = () => {

    const {
        data: heroes = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    const activeFilter = useSelector(state => state.filters.activeFilter);


    const filteredHeroes = useMemo(() => {
        const filteredHeroes = heroes.slice();
        if (activeFilter === 'all') {
            return filteredHeroes;
        } else {
            return filteredHeroes.filter(item => item.variety === activeFilter);
        }
    }, [heroes, activeFilter]);

    if (isLoading) {
        return <h2>Loading</h2>;
    } else if (isError) {
        return <h5>Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="products">
                    <h5 >Героев пока нет</h5>
                </CSSTransition>
            )
        }

        return arr.map(({ id, ...props }) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="products">
                    <CardsListItem key={id} {...props} />
                </CSSTransition>
            )

        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (

        elements


    )
}

export default CardsList;