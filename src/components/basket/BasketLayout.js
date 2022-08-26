import './basketLyout.scss';
import LinkPageBlack from '../linkPage/LinkPageBlack';
import { useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

const BasketLayout = () => {

    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);

    const [amount, setAmount] = useState();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (stateTotal.total !== undefined) {
            setAmount(stateTotal.amount);
            setTotal((state.price.replace(/\$/, '') * 1) + total);;
        }
    }, [stateTotal.amount, stateTotal.total])

    return (
        <>
            <LinkPageBlack />
            <section className="basketLayont">
                <h2 className="basketLayont__title">Shopping cart</h2>
                <h3 className="basketLayont__amount">Количество товаров: {amount + 1}</h3>
                <h3 className="basketLayont__amount">Общая сумма: {total.toFixed(2)}</h3>
                <div className="basketLayont__wrapp">
                    <img src={state.img} alt="coffee" className="basketLayont__img" />
                    <div className="basketLayont__result">
                        <div className="basketLayont__title">{state.title}</div>
                        <div className="basketLayont__country">{state.country}</div>
                        <div className="basketLayont__price">{state.price}</div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default BasketLayout;