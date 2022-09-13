import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';



import LinkPageBlack from '../linkPage/LinkPageBlack';

import './basketLyout.scss';

const BasketLayout = () => {
    const state = useSelector(state => state.basket.stateBasket);

    const stateDecr = useSelector(state => state.basket.basketDecr);


    const [{ items }, setItems] = useState({ items: [] });

    useEffect(() => {
        setItems({ items: [...items.filter(item => item.props.id !== state.id)] })
        // eslint-disable-next-line

    }, [stateDecr.decr])

    const amount = localStorage.getItem('cart')
    const total = localStorage.getItem('total')


    return (
        <>
            <LinkPageBlack />
            <section className="basketLayont">
                <h2 className="basketLayont__title">Shopping cart</h2>
                <h3 className="basketLayont__amount">Количество товаров: {amount}</h3>
                <h3 className="basketLayont__amount">Общая сумма: {total}</h3>
                {[...items]}
            </section>
        </>
    )
};

export default BasketLayout;