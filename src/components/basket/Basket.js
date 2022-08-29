import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeTotals, activeBasketDecr } from '../basket/basketSlice';

import { useState, useEffect } from 'react';

import './basket.scss';

const Basket = () => {
    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);

    const dispatch = useDispatch();

    const [amount, setAmount] = useState(2);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setAmount(amount + 1)
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            setTotal((state.price.replace(/\$/, '') * 1) + total);
            dispatch(activeTotals({ total, amount }))
        }
        // eslint-disable-next-line
    }, [state.count]);

    useEffect(() => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
        if (state.price !== undefined && total > 0 && stateTotal.amount) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            setTotal(total - (state.price.replace(/\$/, '') * 1));
            dispatch(activeTotals({ total, amount }))
            dispatch(activeBasketDecr({ total, amount }))
            console.log(stateTotal)
        }
        // eslint-disable-next-line
    }, [stateTotal.count]);

    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__res">{amount - 1}</div>
            <div className="basket__price">{`${total.toFixed(2)}$`}</div>
        </Link>
    )
};

export default Basket;

