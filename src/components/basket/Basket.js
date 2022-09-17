import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
// eslint-disable-next-line
import BasketLayout from '../basket/BasketLayout';

import { activeTotals, activeBasketIncr } from '../basket/basketSlice';

import './basket.scss';

const Basket = () => {
    // eslint-disable-next-line
    const state = useSelector(state => state.basket.stateBasket);
    const addProductTest = useSelector(state => state.basket.items);
    const stateIncr = useSelector(state => state.basket.basketIncr);
    const totalTest = useSelector(state => state.basket.total);

    const dispatch = useDispatch();

    const [basketObject, setBasketObject] = useLocalStorage('object', 0);
    const [basketAmount, setBasketAmount] = useLocalStorage('amount', 0);
    const [basketTotal, setBasketTotal] = useLocalStorage('total', 0);

    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')
    const getObj = localStorage.getItem('object')


    useEffect(() => {
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            let sum = (state.price.replace(/\$/, '') * 1) + basketTotal;
            var rounded = Math.trunc(sum * 100) / 100;
            setBasketTotal(rounded);
        }
        ////////////////////////////////
        // const json = JSON.stringify(addProductTest)
        // setBasketObject(json)       
        if (addProductTest.length && addProductTest) {
            let amount = addProductTest
            setTodos(addProductTest)
            setBasketAmount(amount.length)

        }

    }, [stateIncr.incr, stateIncr])

    const [todos, setTodos] = useState(
        () =>
            JSON.parse(localStorage.getItem("object")) || [
                { id: 123, text: "object 1 demo" }
            ]
    );
    useEffect(() => {
        localStorage.setItem("object", JSON.stringify(todos));
    }, [todos]);

    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{basketAmount}</div>
            <div className="basket__price">{total ? total : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

