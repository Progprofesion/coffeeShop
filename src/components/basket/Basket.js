import { useSelector } from 'react-redux';

import { useState, useEffect } from 'react';


import './basket.scss';

const Basket = () => {
    const state = useSelector(state => state.basket.stateBasket);

    const [counter, setCounter] = useState(-1);

    useEffect(() => {
        setCounter(counter + 1)
        // eslint-disable-next-line
    }, [state.count])

    // console.log(test)

    return (
        <div className="basket">
            <div className="basket__res">{counter}</div>
            <div className="basket__price">{state.price}</div>
        </div>
    )
};

export default Basket;

