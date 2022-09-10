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

    const [totalStorage, setTotalStorage] = useState(0);
    let [amountStorage, setAmountStorage] = useLocalStorage('amount', 0);


    useEffect(() => {
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            setTotalStorage((state.price.replace(/\$/, '') * 1) + totalStorage);
            setAmountStorage(amountStorage + 1)
        }
        console.log(stateTotal.amountStorage)


        // eslint-disable-next-line
    }, [state.count]);


    useEffect(() => {
        if (amountStorage, amountStorage) {
            dispatch(activeTotals({ totalStorage, amountStorage }))
        }
    }, [amountStorage, totalStorage, state.count]);


    useEffect(() => {
        if (state.price !== undefined && totalStorage > 0 && stateTotal.amountStorage) {
            if (amountStorage >= 1) {
                setAmountStorage(amountStorage - 1)
                // localStorage.setItem('amount', test);
            }
            setTotalStorage(totalStorage - (state.price.replace(/\$/, '') * 1));
            dispatch(activeTotals({ totalStorage, amountStorage }))
            dispatch(activeBasketDecr({ totalStorage, amountStorage }))
        }
        // eslint-disable-next-line
    }, [stateTotal.count]);

    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{amountStorage}</div>
            <div className="basket__price">{totalStorage < 0 ? `0.00$` :
                `${totalStorage.toFixed(2)}$`}</div>
        </Link>
    )
};

export default Basket;

