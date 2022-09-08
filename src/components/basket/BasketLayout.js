import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import LinkPageBlack from '../linkPage/LinkPageBlack';

import { activeBasketCards } from '../basket/basketSlice';

import './basketLyout.scss';
const BasketLayout = () => {

    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);
    const stateDecr = useSelector(state => state.basket.basketDecr);

    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [key, setKey] = useState(0)
    const [{ items }, setItems] = useState({ items: [] });


    useEffect(() => {
        if (stateTotal.total !== undefined) {
            setPrice((state.price.replace(/\$/, '') * 1) + stateTotal.total)
            setAmount(stateTotal.amount)
            if (state.amount === 0) {
                setKey(key + 1)
                addItem(state.id)
            }
            // console.log(state.id)
        }
        // eslint-disable-next-line
    }, [stateTotal.amount])

    useEffect(() => {
        if (stateDecr.total !== undefined) {
            setPrice(stateTotal.total - (state.price.replace(/\$/, '') * 1))
            setAmount(stateTotal.amount - 2)
        }
        // Почти работает
        // setItems({ items: [...items.slice(0, state.id), ...items.slice(state.id + 1)] });
        // setItems({ items: [...items.filter(item => item.key !== 1)] })
        // setItems({
        //     items: [items.filter(item => {
        //         console.log(item.props.id)
        //         // return item.props.id !== item.key
        //     })]
        // })
        let test = items.filter(item => {
            console.log(item.props.id)
            // console.log(state.id)
            return item.props.id !== state.id
        })
        setItems({ items: [...test] })

        console.log(items)

        // eslint-disable-next-line
    }, [stateDecr.total])

    // const test = (arr) => {
    //     return setItems(arr.filter(item => !arr.includes(item)))
    // }



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
                <h3 className="basketLayont__amount">Общая сумма: {price ? price.toFixed(2) : 0}</h3>
                {[...items]}
            </section>
        </>
    )
};

export default BasketLayout;