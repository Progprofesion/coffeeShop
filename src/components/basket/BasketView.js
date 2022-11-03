import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import LinkPage from '../linkPage/LinkPage';

import coffeeIcon from 'src/assets/coffeeIcon.svg';

import {
    incrementQuantity,
    decrementQuantity,
    basketAmount,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    statePrice,
} from 'src/store/slices/basketSlice';

import { useLocalStorage } from 'src/hooks/useLocalStorage';

import './basketView.scss';

import 'animate.css';


const BasketLayout = ({ setModalActive }) => {

    const addProduct = useSelector(state => state.basket.items);
    const stateBasketAmount = useSelector(state => state.basket.amount);
    const total = useSelector(state => state.basket.total);

    // eslint-disable-next-line
    const [localbasketObj, setLocalbasketArr] = useLocalStorage('object', 0);
    const [localBasketAmount, setLocalBasketAmount] = useLocalStorage('amount', 0);
    const [localBasketTotal, setLocalBasketTotal] = useLocalStorage('total', 0);

    const dispatch = useDispatch();

    useEffect(() => {
        setLocalBasketAmount(stateBasketAmount);
        setLocalbasketArr(addProduct);
        setLocalBasketTotal(Number(total));
        dispatch(basketAmount(addProduct));
        // eslint-disable-next-line
    }, [addProduct, stateBasketAmount]);

    const incr = (id, price) => {
        dispatch(statePrice({ price }));
        dispatch(activeIncrTotals(price));
        dispatch(incrementQuantity(id));
    };

    const decr = (id, price) => {
        dispatch(statePrice({ price }));
        dispatch(activeDecrTotals(price));
        dispatch(decrementQuantity(id));
        dispatch(removeProduct(id));
    };


    const view = (arr) => {
        return arr.map(({ id, img, title, country, price, quantity }) => {
            return <div key={id} className="basketView__wrapper animate__animated animate__flipInX">
                <Link to={`/ourcoffee/${id}`}>
                    <img src={img} alt="coffee" className="basketView__img" />
                </Link>
                <div className="basketView__quantity">{quantity}</div>
                <div className="basketView__result">
                    <div className="basketView__subtitle">{title}</div>
                    <div className="basketView__country">{country}</div>
                    <div className="basketView__price">{price}</div>
                    <div className="basketView__btnWrapper">
                        <button onClick={() => incr(id, price)} className="basketView__btnWrapper-btn">+</button>
                        <button onClick={() => decr(id, price)} className="basketView__btnWrapper-btn">-</button>
                    </div>
                </div>
            </div>
        })
    };

    const elements = view(addProduct)

    return (
        <>
            <section className="basketView">
                <LinkPage img={coffeeIcon} style={{ margin: '0 auto' }}>
                    <Link to='/'>
                        <div className="linkPageBlack__descr fz-12">Coffee house</div>
                    </Link>
                    <Link to='/ourcoffee'>
                        <div className="linkPageBlack__descr fz-12">Our coffee</div>
                    </Link>
                    <Link to="/pleasure">
                        <div className="linkPageBlack__descr fz-12">For your pleasure</div>
                    </Link>
                </LinkPage>
                <div className="container">
                    <div className="basketView__layout">
                        <h2 className="basketView__title">Shopping cart</h2>
                        <h3 className="basketView__amount">Amount of products: {localBasketAmount}</h3>
                        <h3 className="basketView__amount">Total price: {localBasketTotal}</h3>
                        {elements}
                        <button onClick={() => setModalActive(true)} className="basketView__btnBuy">Place an order</button>
                    </div>
                </div>
            </section>

        </>
    )
};

export default BasketLayout;