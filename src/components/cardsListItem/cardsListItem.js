import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
    activeStateBasket,
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

    const dispatch = useDispatch();

    const basketIncr = (e) => {
        e.preventDefault();
        addItem()
        dispatch(activeStateBasket({ id, img, price, title, country, count }))
        dispatch(activeIncrTotals(price))
        console.log(price)
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


    const basketDecr = (e) => {
        e.preventDefault();
        dispatch(activeStateBasket({ id, img, price, title, country, count }))
        if (quantity > 0) {
            dispatch(activeDecrTotals(price))
        }
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