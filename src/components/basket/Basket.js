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

    const dispatch = useDispatch();

    // const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);
    let [amountStorage, setAmountStorage] = useLocalStorage('amount', 0);


    useEffect(() => {
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            setTotal((state.price.replace(/\$/, '') * 1) + total);
            setAmountStorage(amountStorage + 1)
            dispatch(activeTotals({ total, amountStorage }))
            // localStorage.setItem('amount', test);
        }
        // eslint-disable-next-line
    }, [state.count]);

    useEffect(() => {
        if (state.price !== undefined && total > 0 && stateTotal.amountStorage) {
            if (amountStorage >= 1) {
                setAmountStorage(amountStorage - 1)
                // localStorage.setItem('amount', test);
            }
            setTotal(total - (state.price.replace(/\$/, '') * 1));
            dispatch(activeTotals({ total, amountStorage }))
            dispatch(activeBasketDecr({ total, amountStorage }))
        }
        // eslint-disable-next-line
    }, [stateTotal.count]);

    let localAmount = localStorage.getItem('amount')

    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{amountStorage}</div>
            <div className="basket__price">{total < 0 ? `0.00$` :
                `${total.toFixed(2)}$`}</div>
        </Link>
    )
};

export default Basket;

