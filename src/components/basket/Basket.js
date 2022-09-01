import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeTotals, activeBasketDecr, activeBasketCards } from '../basket/basketSlice';

import { useState, useEffect } from 'react';

import './basket.scss';

const Basket = () => {
    const state = useSelector(state => state.basket.stateBasket);
    const stateTotal = useSelector(state => state.basket.total);

    const dispatch = useDispatch();

    const [{ items }, setItems] = useState({ items: [] });
    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            setTotal((state.price.replace(/\$/, '') * 1) + total);
            setAmount(amount + 1)
            dispatch(activeTotals({ total, amount }))
            addItem(state.count)
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
            dispatch(activeTotals({ total, amount }))
            dispatch(activeBasketDecr({ total, amount }))

        }
        const test = items.filter(removeSecond);
        dispatch(activeBasketCards(test))
        // eslint-disable-next-line
    }, [stateTotal.count]);


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
        dispatch(activeBasketCards([...items]))
    };

    function removeSecond(element, index) {
        return index !== element
    }

    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{amount - 1}</div>
            <div className="basket__price">{`${total.toFixed(2)}$` ? `${total.toFixed(2)}$` : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

