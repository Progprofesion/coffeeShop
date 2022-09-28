import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
    activeStateBasket,
    activeBasketIncr,
    activeBasketDecr,
    addProduct,
    decrementQuantity,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
} from '../basket/basketSlice';

import 'animate.css';
import './cardsListItem.scss';


const Cards = ({ id, img, title, country, price, quantity }) => {
    const [count, setCount] = useState(Math.floor(Math.random() * 1000));
    const [incr, setIncr] = useState(0);
    const [decr, setDecr] = useState(0);
    const [amountCard, setAmountCard] = useState(0);

    const dispatch = useDispatch();

    const addProductTest = useSelector(state => state.basket.items);

    const basketIncr = (e) => {
        e.preventDefault();
        setCount(count + 1)
        setIncr(incr + 1)
        setAmountCard(amountCard + 1)
        addItem()
        dispatch(activeStateBasket({ id, img, price, title, country, count }))
        dispatch(activeBasketIncr({ incr }))
        dispatch(activeIncrTotals(price))
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
        console.log(quantity)
    };


    const basketDecr = (e) => {
        e.preventDefault();
        setCount(count + 1)
        setDecr(decr + 1)
        if (amountCard > 0) {
            setAmountCard(amountCard - 1)
            dispatch(activeDecrTotals(price))
        }
        dispatch(activeBasketDecr({ decr }))
        dispatch(decrementQuantity(id))
        dispatch(removeProduct(id))
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
                <div className="cards__amount">{quantity}</div>
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