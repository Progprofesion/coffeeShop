import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeTotals, activeBasketDecr, activeBasketCards } from '../basket/basketSlice';

import { useState, useEffect } from 'react';

import BasketLayout from '../basket/BasketLayout';

import './basket.scss';

const Basket = () => {
    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);

    const dispatch = useDispatch();

    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            setTotal((state.price.replace(/\$/, '') * 1) + total);
            setAmount(amount + 1)
            dispatch(activeTotals({ total, amount }))
        }
        // eslint-disable-next-line
    }, [state.count]);

    useEffect(() => {
        if (state.price !== undefined && total > 0 && stateTotal.amount) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            if (amount > 1) {
                setAmount(amount - 1)
            }
            setTotal(total - (state.price.replace(/\$/, '') * 1));
            dispatch(activeTotals({ total, amount }))
            dispatch(activeBasketDecr({ total, amount }))
        }
        // eslint-disable-next-line
    }, [stateTotal.count]);

    return (
        <Link to="/basket" className="basket">
            <BasketLayout />
            <div className="basket__amount">{amount - 1}</div>
            <div className="basket__price">{total < 0 ? `0.00$` :
                `${total.toFixed(2)}$`}</div>
        </Link>
    )
};

export default Basket;

