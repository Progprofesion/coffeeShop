import './basketLyout.scss';
import LinkPageBlack from '../linkPage/LinkPageBlack';
import { useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

const BasketLayout = () => {

    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);

    const [total, setTotal] = useState(0);
    const [{ items }, setItems] = useState({ items: [] });

    useEffect(() => {
        if (stateTotal.total !== undefined) {
            setTotal((state.price.replace(/\$/, '') * 1) + total);;
            addItem()
        }
        // eslint-disable-next-line
    }, [stateTotal.amount, stateTotal.total])


    const addItem = () => {
        items.push(<div className="basketLayont__wrapp">
            <img src={state.img} alt="coffee" className="basketLayont__img" />
            <div className="basketLayont__result">
                <div className="basketLayont__title">{state.title}</div>
                <div className="basketLayont__country">{state.country}</div>
                <div className="basketLayont__price">{state.price}</div>
            </div>
        </div>);
        setItems({ items: [...items] });
    };
    console.log(total)

    return (
        <>
            <LinkPageBlack />
            <section className="basketLayont">
                <h2 className="basketLayont__title">Shopping cart</h2>
                <h3 className="basketLayont__amount">Количество товаров: {stateTotal.amount + 1}</h3>
                <h3 className="basketLayont__amount">Общая сумма: {total}</h3>
                {items}
            </section>
        </>
    )
};

export default BasketLayout;