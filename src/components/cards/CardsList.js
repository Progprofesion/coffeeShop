import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useGetProductsQuery } from '../api/apiSlice';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import HeroesListItem from "../heroesListItem/HeroesListItem";

// import './heroesList.scss';

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
            return filteredHeroes.filter(item => item.element === activeFilter);
        }
    }, [heroes, activeFilter]);

    // const onDelete = useCallback((id) => {
    //     deleteHero(id)
    //     // eslint-disable-next-line
    // }, [])

    if (isLoading) {
        return <div>Loading</div>;
    } else if (isError) {
        return <h5 >Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="hero">
                    <h5 className="text-center mt-5">Героев пока нет</h5>
                </CSSTransition>
            )
        }

        return arr.map(({ id, ...props }) => {
            // return (
            //     <CSSTransition
            //         key={id}
            //         timeout={500}
            //         classNames="hero">
            //         <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)} />
            //     </CSSTransition>
            // )

        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <TransitionGroup component='ul'>
            {elements}
        </TransitionGroup>

    )
}

export default CardsList;