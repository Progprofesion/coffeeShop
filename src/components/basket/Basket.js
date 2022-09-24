import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
// eslint-disable-next-line
import BasketLayout from '../basket/BasketLayout';

import { activeTotals, activeBasketIncr, activeBasketAmount, activeDecrBasketAmount } from '../basket/basketSlice';

import './basket.scss';

const Basket = () => {
    // eslint-disable-next-line
    const state = useSelector(state => state.basket.stateBasket);
    const addProductTest = useSelector(state => state.basket.items);
    const stateIncr = useSelector(state => state.basket.basketIncr);
    const stateDecr = useSelector(state => state.basket.basketDecr);
    const totalTest = useSelector(state => state.basket.total);

    const stateBasketAmount = useSelector(state => state.basket.amount);

    const dispatch = useDispatch();

    const [basketObj, setBasketObject] = useLocalStorage('object', 0);
    // const [basketAmount, setBasketAmount] = useLocalStorage('amount', 0);
    // const [basketTotal, setBasketTotal] = useLocalStorage('total', 0);


    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')

    useEffect(() => {
        if (addProductTest.length) {
            localStorage.setItem('amount', stateBasketAmount)
            setBasketObject(addProductTest)
            localStorage.setItem('total', totalTest)
        }
        // eslint-disable-next-line
    }, [stateIncr])

    useEffect(() => {
        if (addProductTest.length && addProductTest) {
            localStorage.setItem('amount', stateBasketAmount)
            setBasketObject(addProductTest)
            localStorage.setItem('total', totalTest)
        }
        // const test = addProductTest.forEach(item => item.id === state.id ? item.quantity : item.quantity === item.quantity)
        // console.log(test)
        // eslint-disable-next-line
    }, [stateDecr])

    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{amount ? amount : 0}</div>
            <div className="basket__price">{total ? total : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

