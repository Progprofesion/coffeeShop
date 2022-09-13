import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
// eslint-disable-next-line
import BasketLayout from '../basket/BasketLayout';

import './basket.scss';

const Basket = () => {
    // eslint-disable-next-line
    const state = useSelector(state => state.basket.stateBasket);
    const addProductTest = useSelector(state => state.basket.items);
    const stateIncr = useSelector(state => state.basket.basketIncr);

    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')

    const [basketAmount, setBasketAmount] = useLocalStorage('amount', 0);
    const [basketTotal, setBasketTotal] = useLocalStorage('total', 0);
    const [cart, setCart] = useLocalStorage('cart', 0);

    useEffect(() => {
        const json = JSON.stringify(addProductTest)
        setCart(addProductTest)
        setBasketAmount(addProductTest.length)
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            let sum = (state.price.replace(/\$/, '') * 1) + basketTotal;
            var rounded = Math.trunc(sum * 100) / 100;
            setBasketTotal(rounded);
        }
        console.log(cart)
        // eslint-disable-next-line
    }, [stateIncr.incr])

    return (
        <Link to="/basket" className="basket">
            <BasketLayout />
            <div className="basket__amount">{amount}</div>
            <div className="basket__price">{total ? total : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

