import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { basketAmount } from '../basket/basketSlice';

import './basket.scss';

const Basket = () => {
    const addProduct = useSelector(state => state.basket.items);
    const totalTest = useSelector(state => state.basket.total);

    const stateArrRender = useSelector(state => state.basket.stateArr);
    const stateBasketAmount = useSelector(state => state.basket.amount);

    // eslint-disable-next-line
    const [basketObj, setBasketObject] = useLocalStorage('object', 0);

    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('amount', stateBasketAmount);
        setBasketObject(addProduct);
        localStorage.setItem('total', totalTest);
        dispatch(basketAmount(addProduct));
        localStorage.setItem('stateArr', JSON.stringify(stateArrRender));
        // eslint-disable-next-line
    }, [addProduct]);


    return (
        <Link to="/basket" className="basket">
            <div className="basket__amount">{amount ? amount : 0}</div>
            <div className="basket__price">{total > 0 ? total : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

