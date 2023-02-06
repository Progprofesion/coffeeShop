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

import video from '../../assets/video/video.mp4';

import './cardsList.scss';

interface CardListInterface {
    cardsView?: number
    style?: React.CSSProperties
    title?: string
    props?: React.CSSProperties
    stateFaivorite?: boolean
    faivorite?: boolean
    videoStyle?: React.CSSProperties
    addClassBg?: string;
    addClassCardsTitle?: string
    addClassCards?: string
}

type Trender = {
    page: number
    price: number
    id: number
    img: string
    title: string
    country: string
    quantity: number
    faivorite: boolean
}

const CardsList = ({ cardsView, addClassCardsTitle, title, stateFaivorite, videoStyle, addClassBg, addClassCards }: CardListInterface) => {

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

    const filteredCards: Trender[] = useMemo(() => {
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

    const renderCardsList = (arr: Trender[]) => {
        // eslint-disable-next-line
        return arr.map(({ page, price, id, img, title, country, quantity, faivorite, ...rest }: Trender) => {
            // Отображение нужного количества количества карточек или отображение карточек в Избранном
            if ((page > cardsView!) || (stateFaivorite && faivorite)) {
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
        <section className={`cardsList ${addClassCards}`}>
            <div style={videoStyle} className="cardsList__videoWrapp" >
                <video className="cardsList__videoWrapp-video" src={video} autoPlay muted loop>
                </video>
            </div>
            <div className="container">
                <h2 className={`cardsList__title ${addClassCardsTitle}`}>{title}</h2>
                <div className={`cardsList__bg ${addClassBg}`}>
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