import { useSelector, useDispatch } from 'react-redux';
import {
    incrementQuantity,
    decrementQuantity,
    basketAmount,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    activeStateBasket
} from '../basket/basketSlice';

import { useEffect } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import LinkPageBlack from '../linkPage/LinkPageBlack';

import './basketLyout.scss';

const BasketLayout = () => {
    const state = useSelector(state => state.basket.stateBasket);
    const addProductTest = useSelector(state => state.basket.items);
    const stateBasketAmount = useSelector(state => state.basket.amount);
    const totalTest = useSelector(state => state.basket.total);

    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')

    const [basketObj, setBasketObject] = useLocalStorage('object', 0);

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('amount', stateBasketAmount);
        setBasketObject(addProductTest);
        localStorage.setItem('total', totalTest);
        dispatch(basketAmount(addProductTest));
    }, [stateBasketAmount, addProductTest, totalTest]);

    const incr = (id, price) => {
        dispatch(activeStateBasket({ price }));
        dispatch(activeIncrTotals(price));
        dispatch(incrementQuantity(id));
    };

    const decr = (id, price) => {
        dispatch(activeStateBasket({ price }));
        dispatch(activeDecrTotals(price));
        dispatch(decrementQuantity(id));
        dispatch(removeProduct(id));


    };

    const view = (arr) => {
        return arr.map(({ id, img, title, country, price, quantity }) => {
            return <div key={id} className="basketLayont__wrapp">
                <img src={img} alt="coffee" className="basketLayont__img" />
                <div className="basketLayont__quantity">{quantity}</div>
                <div className="basketLayont__result">
                    <div className="basketLayont__title">{title}</div>
                    <div className="basketLayont__country">{country}</div>
                    <div className="basketLayont__price">{price}</div>
                    <div className="basketLayont__btnWrapp">
                        <button onClick={() => incr(id, price)} className="basketLayont__btnWrapp-btn">+</button>
                        <button onClick={() => decr(id, price)} className="basketLayont__btnWrapp-btn">-</button>
                    </div>

                </div>
            </div>
        })
    };

    const elements = view(addProductTest)

    return (
        <>
            <LinkPageBlack />
            <section className="basketLayont">
                <h2 className="basketLayont__title">Shopping cart</h2>
                <h3 className="basketLayont__amount">Количество товаров: {amount}</h3>
                <h3 className="basketLayont__amount">Общая сумма: {total}</h3>
                {elements}
            </section>
        </>
    )
};

export default BasketLayout;