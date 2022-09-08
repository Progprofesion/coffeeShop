import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { activeStateBasket, activeTotals } from '../basket/basketSlice';

import 'animate.css';
import './cardsListItem.scss';


const Cards = ({ id, img, title, country, price }) => {

    const [count, setCount] = useState(Math.floor(Math.random() * 1000));
    const [amount, setAmount] = useState(0);

    const dispatch = useDispatch();

    const basketIncr = (e) => {
        e.preventDefault();
        setCount(count + 1)
        setAmount(amount + 1)
        dispatch(activeStateBasket({ id, img, price, title, country, count, amount }))

    };

    const basketDecr = (e) => {
        e.preventDefault();
        setCount(count + 1)
        if (amount > 0) {
            setAmount(amount - 1)
            dispatch(activeStateBasket({ id, img, price, title, country, count, amount }))
        }
        dispatch(activeTotals({ count, amount }))


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
                <div className="cards__amount">{amount}</div>
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