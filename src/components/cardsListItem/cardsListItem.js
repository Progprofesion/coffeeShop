import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
    activeStateBasket,
    activeBasketIncr,
    activeBasketDecr,
    addProduct,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    basketAmount,

} from '../basket/basketSlice';

import 'animate.css';
import './cardsListItem.scss';


const Cards = ({ id, img, title, country, price }) => {
    const [count, setCount] = useState(Math.floor(Math.random() * 1000));
    console.log(country)
    const [incr, setIncr] = useState(0);
    const [decr, setDecr] = useState(0);
    const [amountCard, setAmountCard] = useState(0);

    const addProductTest = useSelector(state => state.basket.items);
    const state = useSelector(state => state.basket.stateBasket);
    const stateBasketAmount = useSelector(state => state.basket.amount);

    const dispatch = useDispatch();

    const basketIncr = (e) => {
        e.preventDefault();
        setCount(count + 1)
        setIncr(incr + 1)
        setAmountCard(amountCard + 1)
        addItem()
        dispatch(activeStateBasket({ id, img, price, title, country, count }))
        dispatch(activeBasketIncr({ incr }))
        dispatch(activeIncrTotals(price))
        dispatch(basketAmount(addProductTest))
        console.log(addProductTest)
        // dispatch(incrementQuantity(state.id))
    };


    const addItem = () => {
        const item = {
            id,
            img,
            title,
            country,
            price
        }
        dispatch(addProduct(item))
    };

    const basketDecr = (e) => {
        e.preventDefault();
        setCount(count + 1)
        setDecr(decr + 1)
        if (amountCard > 0) {
            setAmountCard(amountCard - 1)
            dispatch(activeStateBasket({ id, img, price, title, country, count }))
            dispatch(activeDecrTotals(price))
            dispatch(basketAmount(addProductTest))
        }
        dispatch(activeBasketDecr({ decr }))
        dispatch(removeProduct(id))
        // if (addProductTest[0]) {
        dispatch(decrementQuantity(id))
        // }

        console.log(addProductTest.length)
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