import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { RootState } from 'src/store/index';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { basketAmount } from 'src/store/slices/basketSlice';

import './basketSticky.scss';

type basketPleasureStyle = {
    pleasureStyle?: string
}

const Basket = ({ pleasureStyle }: basketPleasureStyle) => {

    const addProduct: [] = useSelector((state: RootState) => state.basket.items);
    const total = useSelector((state: RootState) => state.basket.total);
    const stateArrRender = useSelector((state: RootState) => state.basket.stateStartArr);
    const stateBasketAmount = useSelector((state: RootState) => state.basket.amount);

    // eslint-disable-next-line
    const [localObj, setLocatObj] = useLocalStorage('object', 0);
    const [localAmount, setLocalAmount] = useLocalStorage('amount', 0);
    const [localTotal, setLocalTotal] = useLocalStorage('total', 0);
    const [persLocalObj, setPersLocalObj] = useLocalStorage('persObject', 0);
    const [persLocalAmount, setPersLocalAmount] = useLocalStorage('persAmount', 0);
    const [persLocalTotal, setPersLocalTotal] = useLocalStorage('persTotal', 0);

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('userEmail')) {
            localStorage.setItem('persStateArr', JSON.stringify(stateArrRender));
            setPersLocalAmount(stateBasketAmount);
            setPersLocalObj(addProduct);
            setPersLocalTotal(Number(total));
            dispatch(basketAmount())
        } else {
            localStorage.setItem('stateArr', JSON.stringify(stateArrRender));
            setLocalAmount(stateBasketAmount);
            setLocatObj(addProduct);
            setLocalTotal(Number(total));
            dispatch(basketAmount())
        }
        // eslint-disable-next-line
    }, [addProduct, stateBasketAmount, stateArrRender]);

    return (
        <Link to="/basket" id="basketSticky" className={`basketSticky ${pleasureStyle} animate__animated animate__fadeIn`} >
            <div className="basketSticky__amount">{[persLocalAmount ? persLocalAmount : localAmount]}</div>
            <div className="basketSticky__total">{localTotal > 0 ? localTotal : localTotal.toFixed(2) + `$`}</div>
        </Link>
    )
};

export default Basket;

