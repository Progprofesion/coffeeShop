import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { activeStateBasket, activeBasketIncr, activeBasketDecr } from '../basket/basketSlice';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import 'animate.css';
import './cardsListItem.scss';


const Cards = ({ id, img, title, country, price }) => {

    const state = useSelector(state => state.basket.stateBasket);
    const stateIncr = useSelector(state => state.basket.basketincr);
    // const stateDecr = useSelector(state => state.basket.basketDecr);

    const [count, setCount] = useState(Math.floor(Math.random() * 1000));

    const [incr, setIncr] = useState(0);
    const [decr, setDecr] = useState(0);

    const [amountCard, setAmountCard] = useState(0);
    const [basketAmount, setBasketAmount] = useLocalStorage('amount', 0);
    const [basketTotal, setBasketTotal] = useLocalStorage('total', 0);


    const dispatch = useDispatch();

    const basketIncr = (e) => {
        e.preventDefault();
        setCount(count + 1)
        setIncr(incr + 1)
        setAmountCard(amountCard + 1)
        setBasketAmount(basketAmount + 1)
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            let sum = (price.replace(/\$/, '') * 1) + basketTotal;
            var rounded = Math.trunc(sum * 100) / 100;
            setBasketTotal(rounded);
        }
        dispatch(activeStateBasket({ id, img, price, title, country, count, basketAmount }))
        dispatch(activeBasketIncr({ incr }))

    };

    // useEffect(() => {
    //     setBasketAmount(basketAmount + 1)
    //     // eslint-disable-next-line
    // }, [stateIncr.incr])

    // useEffect(() => {
    //     if (basketAmount > 0) {
    //         setBasketAmount(basketAmount - 1)
    //     }
    //     // eslint-disable-next-line
    // }, [stateDecr.decr])

    const basketDecr = (e) => {
        e.preventDefault();
        setCount(count + 1)
        setDecr(decr + 1)
        if (amountCard > 0) {
            setAmountCard(amountCard - 1)
        }
        if (basketAmount > 0) {
            setBasketAmount(basketAmount - 1)
            dispatch(activeStateBasket({ id, img, price, title, country, count, basketAmount }))
        }
        if (state.price !== undefined) {
            if (basketAmount > 1) {
                let sum = (basketTotal - (price.replace(/\$/, '') * 1));
                var rounded = Math.trunc(sum * 100) / 100;
                setBasketTotal(rounded);
            }
        }
        dispatch(activeBasketDecr({ decr }))
    };

    return (
        <div
            name='cards'
            className="cards animate__animated animate__flipInX">
            <div className="cards__item" name='cards' type="text">
                <Link to={`/ourcoffee/${id}`}>
                    <img className="cards__img" src={img} alt="coffee" />
                </Link>
            </div>
            <h3 className="cards__subtitle fz-14">{title}</h3>
            <div className="cards__country fz-14">{country}
                <div className="cards__amount">{amountCard}</div>
            </div>
            <div className="cards__price fz-14">{price}</div>

            <button
                onClick={basketIncr}
                className="cards__basketIncr">+1</button>
            <button
                onClick={basketDecr}
                className="cards__basketDecr">-1</button>
        </div>
    )
};

export default Cards;