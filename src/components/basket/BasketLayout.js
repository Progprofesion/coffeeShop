import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import LinkPageBlack from '../linkPage/LinkPageBlack';

import { activeBasketCards } from '../basket/basketSlice';

import './basketLyout.scss';
const BasketLayout = () => {

    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);
    const stateDecr = useSelector(state => state.basket.basketDecr);
    const stateBasketCards = useSelector(state => state.basket.basketCards);


    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [key, setKey] = useState(0)
    const [{ items }, setItems] = useState({ items: [] });

    const dispatch = useDispatch();


    useEffect(() => {
        if (stateTotal.total !== undefined) {
            setPrice((state.price.replace(/\$/, '') * 1) + stateTotal.total)
            setAmount(stateTotal.amount)
            if (state.amount === 0) {
                setKey(key + 1)
                addItem(state.id)
            }
        }
        if (price > 0) {
            localStorage.setItem('price', price);
        }


        // eslint-disable-next-line
    }, [stateTotal.amount])

    useEffect(() => {
        if (stateDecr.total !== undefined) {
            setPrice(stateTotal.total - (state.price.replace(/\$/, '') * 1))
            setAmount(stateTotal.amount - 2)
            if (price > 0) {
                localStorage.setItem('price', price);
            }
        }
        setItems({ items: [...items.filter(item => item.props.id !== state.id)] })
        dispatch(activeBasketCards([...items]))

        // eslint-disable-next-line
    }, [stateDecr.total])

    let testPrice = localStorage.getItem('price')

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
        dispatch(activeBasketCards([...items]))
    };

    return (
        <>
            <LinkPageBlack />
            <section className="basketLayont">
                <h2 className="basketLayont__title">Shopping cart</h2>
                <h3 className="basketLayont__amount">Количество товаров: {amount}</h3>
                <h3 className="basketLayont__amount">Общая сумма: {price ? testPrice : 0}</h3>
                {[...items]}
            </section>
        </>
    )
};

export default BasketLayout;