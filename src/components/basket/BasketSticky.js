import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

import { basketAmount } from 'src/store/slices/basketSlice';


import './basketSticky.scss';

const Basket = () => {
    const addProduct = useSelector(state => state.basket.items);
    const totalTest = useSelector(state => state.basket.total);

    const stateArrRender = useSelector(state => state.basket.stateStartArr);
    const stateBasketAmount = useSelector(state => state.basket.amount);

    // eslint-disable-next-line
    const [localbasketObj, setLocalbasketObj] = useLocalStorage('object', 0);
    const [localBasketAmount, setLocalBasketAmount] = useLocalStorage('amount', 0);
    const [localBasketTotal, setLocalBasketTotal] = useLocalStorage('total', 0);

    const dispatch = useDispatch();

    useEffect(() => {
        setLocalBasketAmount(stateBasketAmount);
        setLocalbasketObj(addProduct);
        setLocalBasketTotal(Number(totalTest));
        dispatch(basketAmount(addProduct));
        localStorage.setItem('stateArr', JSON.stringify(stateArrRender));
        // eslint-disable-next-line
    }, [addProduct, stateBasketAmount]);

    return (
        <Link to="/basket" className="basketSticky">
            <div className="basketSticky__amount">{localBasketAmount ? localBasketAmount : 0}</div>
            <div className="basketSticky__price">{localBasketTotal > 0 ? localBasketTotal + `$` : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

