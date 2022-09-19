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
            setBasketAmount(addProductTest.length)
        }
    }, [stateIncr])

    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted) {
            if (state.price !== undefined) {
                let sum = state.price + basketTotal;
                let rounded = Math.trunc(sum * 100) / 100;
                setBasketTotal(rounded)
            }
        }
        isMounted.current = true
    }, [amount])

    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{basketAmount}</div>
            <div className="basket__price">{basketTotal ? basketTotal : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

