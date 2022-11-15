import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import LinkPage from '../linkPage/LinkPage';
import BasketView from './BasketView';
import HamburgerV2 from '../hamburger/HamburgerV2';
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

import './basketLayout.scss';


import 'animate.css';

const BasketLayout = ({ setModalActive }) => {

    const addProduct = useSelector(state => state.basket.items);
    const stateBasketAmount = useSelector(state => state.basket.amount);
    const total = useSelector(state => state.basket.total);
    const stateArrRender = useSelector(state => state.basket.stateStartArr);

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
    }, [addProduct, stateBasketAmount, stateArrRender, localbasketObj]);


    const view = (arr) => {
        return arr.map(({ id, img, title, country, price, quantity, ...rest }) => {
            const incr = () => {
                dispatch(statePrice({ price }));
                dispatch(activeIncrTotals(price));
                dispatch(incrementQuantity(id));
            };

            const decr = () => {
                dispatch(statePrice({ price }));
                dispatch(activeDecrTotals(price));
                dispatch(decrementQuantity(id));
                dispatch(removeProduct(id));
            };

            return <BasketView
                {...rest}
                key={id}
                id={id}
                img={img}
                title={title}
                country={country}
                price={price}
                quantity={quantity}
                incr={incr}
                decr={decr} />
        })
    };

    const elements = view(addProduct)

    return (
        <section className="basketLayout">
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
            <HamburgerV2 />
            <div className="container">
                <ul className="basketView__layout">
                    <h2 className="basketView__title">Shopping cart</h2>
                    <h3 className="basketView__amount">Amount of products: {localBasketAmount}</h3>
                    <h3 className="basketView__amount">Total price: {localBasketTotal > 0 ? localBasketTotal.toFixed(2) + `$` : `0.00$`}</h3>
                    <TransitionGroup>
                        {elements}
                    </TransitionGroup>
                    <button onClick={() => setModalActive(true)} className="basketView__btnBuy">Place an order</button>
                </ul>
            </div>
        </section>
    )
};

export default BasketLayout;