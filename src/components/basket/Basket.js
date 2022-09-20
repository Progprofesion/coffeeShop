import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
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
        ////////////////////////////////
        // const json = JSON.stringify(addProductTest)
        // setBasketObject(json)       
        if (addProductTest.length && addProductTest) {
            if (basketAmount) {
                setBasketAmount(basketAmount + 1)
            } else {
                setBasketAmount(addProductTest.length)
            }

        }
    }, [stateIncr])

    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{amount ? amount : 0}</div>
            <div className="basket__price">{0 ? 0 : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

