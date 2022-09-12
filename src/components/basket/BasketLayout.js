import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import LinkPageBlack from '../linkPage/LinkPageBlack';

import './basketLyout.scss';

const BasketLayout = () => {

    const state = useSelector(state => state.basket.stateBasket);
    const stateIncr = useSelector(state => state.basket.basketincr);
    const stateDecr = useSelector(state => state.basket.basketDecr);

    const [{ items }, setItems] = useState({ items: [] });

    useEffect(() => {
        if (state.basketAmount === 0) {
            addItem(state.id)
        }
        console.log(stateIncr.incr);
        // eslint-disable-next-line
    }, [stateIncr.incr])

    useEffect(() => {
        setItems({ items: [...items.filter(item => item.props.id !== state.id)] })
        // eslint-disable-next-line
    }, [stateDecr.decr])

    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')


    const addItem = (key) => {
        items.push(<div key={key} id={key} className="basketLayont__wrapp">
            <img src={state.img} alt="coffee" className="basketLayont__img" />
            <div className="basketLayont__result">
                <div className="basketLayont__title">{state.title}</div>
                <div className="basketLayont__country">{state.country}</div>
                <div className="basketLayont__price">{state.price}</div>
            </div>
        </div>)
        setItems({ items: [...items] })
    };

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