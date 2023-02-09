import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { RootState } from 'src/store/index';

import coffeeBeansIconWhite from 'src/assets/icons/coffeeBeansIconWhite.svg'
// import coffeeBeansIconBlack from 'src/assets/icons/coffeeBeansIconBlack.svg'
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
import './card.scss';

interface CardListItemInterface {
    id: number
    img: string
    title: string
    country: string
    price: number
    quantity: number
    faivorite: boolean
}



const Card = ({ id, img, title, country, price, quantity, faivorite, ...rest }: CardListItemInterface) => {

    const [value, setValue] = useState('');

    const stateArrRender: CardListItemInterface[] = useSelector((state: RootState) => state.basket.stateStartArr);

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
                <div className="card animate__animated animate__flipInX " >
                    <div className="card__star">
                        <img loading="lazy" onClick={() => star()} className={faivorite ? "activeStarClick card__starImg" : "cardsListItem__starImg"} src={starImg} alt="" />
                    </div>
                    <div className="card__wrapperImg">
                        <Link to={`/ourcoffee/${id}`}>
                            <img className="card__img" src={img} alt="coffee" />
                        </Link>
                    </div>
                    <h3 className="card__subtitle fz-14Black">{title}</h3>
                    <div className="card__wrapperCountryPrice fz-14Black">
                        <div className="card__country">{country}:</div>
                        <div className="card__price fz-14Black">{price}<span>$</span></div>
                    </div>
                    <div className="card__wrapperBasketInput">
                        <form className='card__form' action="">
                            <input
                                inputMode='tel'
                                value={value.replace(/^[^0-9_]*[a-zA-Z0-9_]*[^0-9]$/, '')}
                                maxLength={2}
                                onChange={e => setValue(e.target.value)}
                                className="card__input" placeholder="00" type='tel' />
                            <button
                                onClick={e => basketRandomBtn(e, value)}
                                className="card__randomBtn">+</button>
                        </form>
                        <Link to="/basket">
                            <img className="card__basket" src={basketIcon} alt="BasketIcon" />
                        </Link>
                    </div>
                    <img loading="lazy" className='card__imgIcon' src={coffeeBeansIconWhite} alt="" />
                    <div className="card__wrapperBtnAmount">
                        <button
                            onClick={basketDecr}
                            className="card__btn">-</button>
                        <div className="card__amount">{quantity}</div>
                        <button
                            onClick={basketIncr}
                            className="card__btn">+</button>
                    </div>
                </div>
            </div >
        </CSSTransition>
    )
};

export default Card;