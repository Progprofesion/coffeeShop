import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from 'src/store/index';

import { useLocalStorage } from 'src/hooks/useLocalStorage';

import { basketAmount } from 'src/store/slices/basketSlice';


import './basketSticky.scss';

const Basket = () => {

    const addProduct = useSelector((state: RootState) => state.basket.items);
    const total = useSelector((state: RootState) => state.basket.total);
    const stateArrRender = useSelector((state: RootState) => state.basket.stateStartArr);
    const stateBasketAmount = useSelector((state: RootState) => state.basket.amount);

    // eslint-disable-next-line
    const [localbasketObj, setLocalbasketObj] = useLocalStorage('object', 0);
    const [localBasketAmount, setLocalBasketAmount] = useLocalStorage('amount', 0);
    const [localBasketTotal, setLocalBasketTotal] = useLocalStorage('total', 0);

    const dispatch = useDispatch();

    useEffect(() => {
        setLocalBasketAmount(stateBasketAmount);
        setLocalbasketObj(addProduct);
        setLocalBasketTotal(Number(total));
        dispatch(basketAmount(addProduct));
        localStorage.setItem('stateArr', JSON.stringify(stateArrRender));
        // eslint-disable-next-line
    }, [addProduct, stateBasketAmount]);

    return (
        <Link to="/basket" id="basketSticky" className="basketSticky">
            <div className="basketSticky__amount">{localBasketAmount ? localBasketAmount : 0}</div>
            <div className="basketSticky__total">{localBasketTotal > 0 ? localBasketTotal.toFixed(2) + `$` : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

