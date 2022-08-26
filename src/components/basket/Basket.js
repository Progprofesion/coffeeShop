import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeStateBasket } from '../basket/basketSlice';
import BasketLayout from '../basket/BasketLayout';

import { useState, useEffect } from 'react';


import './basket.scss';

const Basket = () => {
    const state = useSelector(state => state.basket.stateBasket);

    const dispatch = useDispatch();

    const [amount, setAmount] = useState(-1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setAmount(amount + 1)
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            setTotal((state.price.replace(/\$/, '') * 1) + total);
            dispatch(activeStateBasket({ total, amount }))
        }
        // eslint-disable-next-line
    }, [state.count]);

    return (
        <Link to="/basket" className="basket">
            <BasketLayout />
            <div className="basket__res">{amount}</div>
            <div className="basket__price">{`${total.toFixed(2)}$`}</div>
        </Link>
    )
};

export default Basket;

