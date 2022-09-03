import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import LinkPageBlack from '../linkPage/LinkPageBlack';

import './basketLyout.scss';
const BasketLayout = () => {

    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);
    const stateDecr = useSelector(state => state.basket.basketDecr);
    const stateCards = useSelector(state => state.basket.basketCards);

    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (stateTotal.total !== undefined) {
            setPrice((state.price.replace(/\$/, '') * 1) + stateTotal.total)
            setAmount(stateTotal.amount)
        }
        // eslint-disable-next-line
    }, [stateTotal.amount, stateTotal.total])

    useEffect(() => {
        if (stateDecr.total !== undefined) {
            setPrice(stateTotal.total - (state.price.replace(/\$/, '') * 1))
            setAmount(stateTotal.amount - 2)
        }
        // eslint-disable-next-line
    }, [stateDecr.total])

    return (
        <>
            <LinkPageBlack />
            <section className="basketLayont">
                <h2 className="basketLayont__title">Shopping cart</h2>
                <h3 className="basketLayont__amount">Количество товаров: {amount}</h3>
                <h3 className="basketLayont__amount">Общая сумма: {price ? price.toFixed(2) : 0}</h3>
                {[...stateCards]}
            </section>
        </>
    )
};

export default BasketLayout;