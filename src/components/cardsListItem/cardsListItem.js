import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    statePrice,
    addProduct,
    decrementQuantity,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    startState,
    randomNumber
} from 'src/store/slices/basketSlice';

import basketIcon from 'src/assets/icons/basketIcon.svg';

import 'animate.css';
import './cardsListItem.scss';

const CardsListItem = ({ id, img, title, country, price, quantity }) => {

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const basketIncr = (e) => {
        e.preventDefault();
        addItem()
        dispatch(statePrice({ price }))
        dispatch(activeIncrTotals(price))
    };


    const basketIncr10 = (e, stateRandom) => {
        // e.preventDefault();
        if (e.code === "Enter") {
            for (let t = 0; t < stateRandom; t++) {
                e.preventDefault();
                addItem()
                dispatch(statePrice({ price }))
                dispatch(activeIncrTotals(price))
                setValue('')
            }
        }
    }

    const basketDecr = (e) => {
        e.preventDefault();
        dispatch(statePrice({ price }))
        if (quantity > 0) {
            dispatch(activeDecrTotals(price))
        }
        dispatch(decrementQuantity(id))
        dispatch(removeProduct(id))
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

    return (
        <div
            name='cards'
            className="cardsListItem  animate__animated animate__flipInX ">
            <div className="cardsListItem__item" name='cards' type="text">
                <Link to={`/ourcoffee/${id}`}>
                    <img className="cardsListItem__img" src={img} alt="coffee" />
                </Link>
            </div>
            <h3 className="cardsListItem__subtitle fz-14Black">{title}</h3>
            <div className="cardsListItem__country fz-14Black">
                <div>{country}</div>
                <form action="">
                    <input
                        value={value.replace(/[A-Za-zА-Яа-яЁё.,]/, '')}
                        maxLength={2}
                        onKeyDown={e => basketIncr10(e, value)}
                        onChange={e => setValue(e.target.value)}
                        className="cardsListItem__incr10" placeholder="00" type='text' />
                </form>
                <Link to="/basket">
                    <img className="cardsListItem__basket" src={basketIcon} alt="BasketIcon" />
                </Link>
            </div>
            <div className="cardsListItem__price fz-14Black">{price}<span>$</span></div>
            <div className="cardsListItem__wrapper">
                <button
                    onClick={basketDecr}
                    className="cardsListItem__wrapper-btn">-</button>
                <div className="cardsListItem__amount">{quantity}</div>
                <button
                    onClick={basketIncr}
                    className="cardsListItem__wrapper-btn">+</button>
            </div>
        </div >
    )
};

export default CardsListItem;