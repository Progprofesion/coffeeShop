import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import LinkPageBlack from '../linkPage/LinkPageBlack';

import './basketLyout.scss';
const BasketLayout = () => {

    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);
    const stateDescr = useSelector(state => state.basket.basketDecr);

    const [{ items }, setItems] = useState({ items: [] });
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (stateTotal.total !== undefined) {
            setPrice((state.price.replace(/\$/, '') * 1) + stateTotal.total)
            setAmount(stateTotal.amount)
            addItem(state.count);
        }
        // eslint-disable-next-line
    }, [stateTotal.amount, stateTotal.total])

    useEffect(() => {
        if (stateDescr.total !== undefined) {
            setPrice(stateTotal.total - (state.price.replace(/\$/, '') * 1))
            setAmount(stateTotal.amount - 2)
            addItem(state.count);
        }
        // eslint-disable-next-line
    }, [stateDescr.total])

    const addItem = (id) => {
        items.push(<div key={id} className="basketLayont__wrapp">
            <img src={state.img} alt="coffee" className="basketLayont__img" />
            <div className="basketLayont__result">
                <div className="basketLayont__title">{state.title}</div>
                <div className="basketLayont__country">{state.country}</div>
                <div className="basketLayont__price">{state.price}</div>
            </div>
        </div>);
        setItems({ items: [...items] });
    };

    return (
        <>
            <LinkPageBlack />
            <section className="basketLayont">
                <h2 className="basketLayont__title">Shopping cart</h2>
                <h3 className="basketLayont__amount">Количество товаров: {amount}</h3>
                <h3 className="basketLayont__amount">Общая сумма: {price ? price.toFixed(2) : 0}</h3>
                {items}
            </section>
        </>
    )
};

export default BasketLayout;