import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeTotals, activeBasketDecr, activeBasketCards } from '../basket/basketSlice';

import { useState, useEffect, useRef } from 'react';

import BasketLayout from '../basket/BasketLayout';

import './basket.scss';

const Basket = () => {
    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);
    const stateCards = useSelector(state => state.basket.basketCards)

    const dispatch = useDispatch();

    const refContainer = useRef(1);

    const [{ items }, setItems] = useState({ items: [] });
    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);
    const [key, setKey] = useState(0)
    const [id, setId] = useState(0)

    useEffect(() => {
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            setTotal((state.price.replace(/\$/, '') * 1) + total);
            setAmount(amount + 1)
            setId(id + 1)
            dispatch(activeTotals({ total, amount }))
            if (state.amount === 0) {
                setKey(key + 1)
                addItem(key, id)
            }
            dispatch(activeBasketCards([...items]))
        }
        // eslint-disable-next-line
    }, [state.count]);

    useEffect(() => {
        if (state.price !== undefined && total > 0 && stateTotal.amount) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            if (amount > 1) {
                setAmount(amount - 1)
            }
            setTotal(total - (state.price.replace(/\$/, '') * 1));
            setId(id - 1)
            dispatch(activeTotals({ total, amount }))
            dispatch(activeBasketDecr({ total, amount }))
            // setItems([...items.slice(...items[0].key, 1)])
            // setItems({ items: [...items.filter(item => item.key !== item.refContainer)] });
            // setItems({ items: [...items.filter(item => item.props.id !== item.key)] });

            // console.log(items[0].props.id)
            // remove(...items.key)

        }
        // let filter = items.filter(item => item !== item.key)
        let results = items.filter(function (item, index, array) {
            // если true - элемент добавляется к результату, и перебор продолжается
            // возвращается пустой массив в случае, если ничего не найдено
            console.log(item.key)
            return item === item.key
        });
        console.log(results)
        // setItems([...items.slice(0, refContainer), ...items.slice(refContainer + 1)]);
        // setItems({ items: [...items.slice(2, items.filter(item => item !== item.key))] });

        dispatch(activeBasketCards([...results]))


        // console.log(refContainer.current)
        // remove()

        // eslint-disable-next-line
    }, [stateTotal.count]);


    const addItem = (key, id) => {
        items.push(<div key={key} ref={refContainer} className="basketLayont__wrapp">
            <img src={state.img} alt="coffee" className="basketLayont__img" />
            <div className="basketLayont__result">
                <div className="basketLayont__title">{state.title}</div>
                <div className="basketLayont__country">{state.country}</div>
                <div className="basketLayont__price">{state.price}</div>
            </div>
        </div>);
        setItems({ items: [...items] });
    };

    // function removeOdd(element, index) {
    //     // return !(element % 2);
    //     return element === index
    // }


    return (
        <Link to="/basket" className="basket">
            <BasketLayout />
            <div className="basket__amount">{amount - 1}</div>
            <div className="basket__price">{total < 0 ? `0.00$` :
                `${total.toFixed(2)}$`}</div>
        </Link>
    )
};

export default Basket;

