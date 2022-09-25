import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, basketAmount } from '../basket/basketSlice';

import { useEffect } from 'react';



import LinkPageBlack from '../linkPage/LinkPageBlack';

import './basketLyout.scss';

const BasketLayout = () => {
    const state = useSelector(state => state.basket.stateBasket);
    const addProductTest = useSelector(state => state.basket.items);
    const stateBasketAmount = useSelector(state => state.basket.amount);

    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(basketAmount(addProductTest));
    // }, [addProductTest])
    const incr = (id) => {
        dispatch(incrementQuantity(id));
        dispatch(basketAmount(addProductTest));
        localStorage.setItem('amount', stateBasketAmount)
    };

    const decr = (id) => {
        dispatch(decrementQuantity(id))
        dispatch(basketAmount(addProductTest));
        localStorage.setItem('amount', stateBasketAmount)
    };

    const test = (arr) => {
        return arr.map(({ id, img, title, country, price, quantity }) => {
            return <div key={id} className="basketLayont__wrapp">
                <img src={img} alt="coffee" className="basketLayont__img" />
                <div className="basketLayont__quantity">{quantity}</div>
                <div className="basketLayont__result">
                    <div className="basketLayont__title">{title}</div>
                    <div className="basketLayont__country">{country}</div>
                    <div className="basketLayont__price">{price}</div>
                    <div className="basketLayont__btnWrapp">
                        <button onClick={() => incr(id)} className="basketLayont__btnWrapp-btn">+</button>
                        <button onClick={() => decr(id)} className="basketLayont__btnWrapp-btn">-</button>
                    </div>

                </div>
            </div>
        })
    }

    const elements = test(addProductTest)


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