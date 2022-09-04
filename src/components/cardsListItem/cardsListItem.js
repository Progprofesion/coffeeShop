import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { activeStateBasket, activeTotals, activeBasketCards } from '../basket/basketSlice';

import 'animate.css';
import './cardsListItem.scss';


const Cards = ({ id, img, title, country, price }) => {

    const stateCards = useSelector(state => state.basket.basketCards);
    const state = useSelector(state => state.basket.stateBasket);

    const [{ items }, setItems] = useState({ items: [] });
    const [count, setCount] = useState(Math.floor(Math.random() * 1000));
    const [amount, setAmount] = useState(0);
    const [key, setKey] = useState(0)

    const dispatch = useDispatch();

    const basketIncr = (e) => {
        e.preventDefault();
        setCount(count + 1)
        setAmount(amount + 1)
        dispatch(activeStateBasket({ id, img, price, title, country, count, amount }))
        if (stateCards === undefined) {
            console.log(stateCards.key)
        }
    };

    useEffect(() => {
        if (state.amount === 0) {
            setKey(key + 1)
            addItem(key, id)
        }
        // eslint-disable-next-line
    }, [state.count]);

    const basketDecr = (e) => {
        e.preventDefault();
        // setCount(count + 1)
        if (amount > 0) {
            setAmount(amount - 1)
            dispatch(activeStateBasket({ id, img, price, title, country, amount }))
        }
        dispatch(activeTotals({ count, amount }))
        // Убавляет на 1
        dispatch(activeBasketCards([...stateCards.slice(1)]))
        // dispatch(activeBasketCards([...stateCards.filter((item, i) => {
        //     console.log(item, i)
        //     return item.key === item.i
        // })]))
        // setItems([...stateCards.slice(1)])
    };

    const addItem = async (index, id) => {
        items.push(<div key={index} id={id} className="basketLayont__wrapp">
            <img src={state.img} alt="coffee" className="basketLayont__img" />
            <div className="basketLayont__result">
                <div className="basketLayont__title">{state.title}</div>
                <div className="basketLayont__country">{state.country}</div>
                <div className="basketLayont__price">{state.price}</div>
            </div>
        </div>);
        setItems({ items: [...items] })
        dispatch(activeBasketCards([...items]))
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