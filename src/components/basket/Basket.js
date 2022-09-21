import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
// eslint-disable-next-line
import BasketLayout from '../basket/BasketLayout';

import { activeTotals, activeBasketIncr } from '../basket/basketSlice';

import './basket.scss';

const Basket = () => {
    // eslint-disable-next-line
    const state = useSelector(state => state.basket.stateBasket);
    const addProductTest = useSelector(state => state.basket.items);
    const stateIncr = useSelector(state => state.basket.basketIncr);
    const totalTest = useSelector(state => state.basket.total);

    const dispatch = useDispatch();


    const [basketObj, setBasketObject] = useLocalStorage('object', 0);
    const [basketAmount, setBasketAmount] = useLocalStorage('amount', 0);


    const getObj = localStorage.getItem('object');
    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')

    // const getObj = JSON.parse(localStorage.getItem('object')) || [];



    useEffect(() => {
        ///////////////////////////////

        const jsonAddproduct = JSON.stringify(basketObj)

        if (addProductTest.length) {
            if (basketAmount) {
                setBasketAmount(basketAmount + 1)
            } else {
                setBasketAmount(addProductTest.length)
            }

            if (basketObj) {
                localStorage.setItem('object', getObj + JSON.stringify(addProductTest))
                // setBasketObject(basketObj + addProductTest)
            } else {
                setBasketObject(addProductTest)
            }
            // console.log(JSON.parse(getObj))
            console.log(getObj)
        }
    }, [stateIncr])


    // oldItems.push(newItem);





    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{amount ? amount : 0}</div>
            <div className="basket__price">{total ? total : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

