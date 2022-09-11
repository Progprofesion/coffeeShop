import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeTotals, activeBasketDecr } from '../basket/basketSlice';

import { useState, useEffect } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import BasketLayout from '../basket/BasketLayout';

import './basket.scss';

const Basket = () => {
    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);
    const stateDecr = useSelector(state => state.basket.basketDecr);

    const dispatch = useDispatch();

    const [amount, setAmount] = useLocalStorage('amount', 0);
    const [total, setTotal] = useLocalStorage('total', 0);


    useEffect(() => {
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            // setTotal((state.price.replace(/\$/, '') * 1) + total);
            let sum = (state.price.replace(/\$/, '') * 1) + total;
            var rounded = Math.trunc(sum * 100) / 100;;
            setTotal(rounded);
            setAmount(amount + 1)
            // console.log(sum.toFixed(2));
        }

        // eslint-disable-next-line
    }, [state.count]);

    const totalTest = localStorage.getItem('total')
    let test = totalTest
    // console.log(test.replace(/^\d+(\.\d\d)?$/))


    useEffect(() => {
        if (state.price !== undefined && total > 0 && stateTotal.amount) {
            if (amount > 1) {
                setAmount(amount - 1)
            }
            setTotal(total - (state.price.replace(/\$/, '') * 1));
            dispatch(activeBasketDecr({ total, amount }))
        }
        // eslint-disable-next-line
    }, [stateTotal.count]);


    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{amount}</div>
            <div className="basket__price">{total}</div>
        </Link>
    )
};

export default Basket;

