import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { RootState } from 'src/store/index';

import coffeeBeansIconWhite from 'src/assets/icons/coffeeBeansIconWhite.svg'
import starImg from '../../assets/icons/star.svg'

import {
    statePrice,
    addProduct,
    incrQuantity,
    decrQuantity,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    addFavorite,
    removeFaivorite
} from 'src/store/slices/basketSlice';

import basketIcon from 'src/assets/icons/basketIcon.svg';

import 'animate.css';
import './cardsListItem.scss';

interface CardListItemInterface {
    id: number
    img: string
    title: string
    country: string
    price: number
    quantity: number
    faivorite: boolean
}

const CardsListItem = ({ id, img, title, country, price, quantity, faivorite, ...rest }: CardListItemInterface) => {

    const [value, setValue] = useState('');

    const stateArrRender = useSelector((state: RootState) => state.basket.stateStartArr);

    const inputLabel = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

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

    const basketIncr = () => {
        addItem()
        dispatch(incrQuantity(price))
        dispatch(statePrice({ price }))
        dispatch(activeIncrTotals(price))
    };


    const basketDecr = () => {
        dispatch(statePrice({ price }))
        dispatch(decrQuantity(id))
        dispatch(activeDecrTotals(price))
        dispatch(removeProduct(id))
    };

    const basketRandomBtn = (e: React.MouseEvent, stateRandom: number | string) => {
        e.preventDefault();
        for (let t = 0; t < stateRandom; t++) {
            addItem()
            dispatch(incrQuantity(price))
            dispatch(statePrice({ price }))
            dispatch(activeIncrTotals(price))
            setValue('')
        }
    }

    const star = () => {
        // @ts-ignore
        if (!stateArrRender[id].faivorite) {
            dispatch(addFavorite(id))
        } else {
            dispatch(removeFaivorite(id))
        }
    };


    return (
        <CSSTransition
            {...rest}
            key={id}
            timeout={500}
            nodeRef={inputLabel}
            classNames="cards__item">
            <div ref={inputLabel}>
                <ul className="cardsListItem animate__animated animate__flipInX " >
                    <div className="cardsListItem__star">
                        <img onClick={() => star()} className={faivorite ? "activeStarClick cardsListItem__starImg" : "cardsListItem__starImg"} src={starImg} alt="" />
                    </div>
                    <div className="cardsListItem__wrapperImg">
                        <Link to={`/ourcoffee/${id}`}>
                            <img className="cardsListItem__img" src={img} alt="coffee" />
                        </Link>
                    </div>
                    <h3 className="cardsListItem__subtitle fz-14Black">{title}</h3>
                    <div className="cardsListItem__wrapperCountryPrice fz-14Black">
                        <div className="cardsListItem__country">{country}:</div>
                        <div className="cardsListItem__price fz-14Black">{price}<span>$</span></div>
                    </div>
                    <div className="cardsListItem__wrapperBasketInput">
                        <form className='cardsListItem__form' action="">
                            <input
                                inputMode='tel'
                                value={value.replace(/^[^0-9_]*[a-zA-Z0-9_]*[^0-9]$/, '')}
                                maxLength={2}
                                onChange={e => setValue(e.target.value)}
                                className="cardsListItem__input" placeholder="00" type='tel' />
                            <button
                                onClick={e => basketRandomBtn(e, value)}
                                className="cardsListItem__randomBtn">+</button>
                        </form>
                        <Link to="/basket">
                            <img className="cardsListItem__basket" src={basketIcon} alt="BasketIcon" />
                        </Link>
                    </div>
                    <img className='cardsListItem__imgIcon' src={coffeeBeansIconWhite} alt="" />
                    <div className="cardsListItem__wrapperBtnAmount">
                        <button
                            onClick={basketDecr}
                            className="cardsListItem__btn">-</button>
                        <div className="cardsListItem__amount">{quantity}</div>
                        <button
                            onClick={basketIncr}
                            className="cardsListItem__btn">+</button>
                    </div>
                </ul>
            </div >
        </CSSTransition>
    )
};

export default CardsListItem;