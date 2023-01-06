import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './basketView.scss';


import {
    incrQuantity,
    decrQuantity,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    statePrice,
} from 'src/store/slices/basketSlice';

interface BasketViewIntreface {
    id: number
    img: string
    title: string
    country: string
    price: number
    quantity: number
    faivorite: boolean
}



const BasketView = ({ id, img, title, country, price, quantity, faivorite, ...rest }: BasketViewIntreface) => {
    const [showButton, setShowButton] = useState(false)

    const nodeRef = useRef(null);

    const dispatch = useDispatch();

    const incr = () => {
        dispatch(statePrice({ price }));
        dispatch(activeIncrTotals(price));
        dispatch(incrQuantity(id));

    };

    const decr = () => {
        dispatch(statePrice({ price }))
        dispatch(decrQuantity(id))
        dispatch(activeDecrTotals(price))
        dispatch(removeProduct(id))
    };

    return (
        <CSSTransition
            {...rest}
            key={id}
            nodeRef={nodeRef}
            timeout={500}
            unmountOnExit
            onExiting={() => setShowButton(true)}
            onExited={() => setShowButton(false)}
            classNames="basketView__wrapper" >
            <div className="animate__animated animate__flipInX ">
                <div
                    key={id}
                    ref={nodeRef}
                    className="basketView__wrapper">
                    <Link to={`/ourcoffee/${id}`}>
                        <img src={img} alt="coffee" className="basketView__img" />
                    </Link>
                    <div className="basketView__quantity">{quantity}</div>
                    <div className="basketView__result">
                        <div className="basketView__subtitle">{title}</div>
                        <div className="basketView__country">{country}</div>
                        <div className="basketView__price">{price}<span>$</span></div>
                        <div className="basketView__btnWrapper">
                            <button
                                disabled={showButton}
                                onClick={decr}
                                className="basketView__btnWrapper-btn">-</button>
                            <button
                                onClick={incr}
                                className="basketView__btnWrapper-btn">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition >
    )
}

export default BasketView