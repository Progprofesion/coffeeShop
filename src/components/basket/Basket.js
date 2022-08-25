import { useSelector } from 'react-redux';

import { useState, useEffect } from 'react';


import './basket.scss';

const Basket = () => {
    const state = useSelector(state => state.basket.stateBasket);

    const [amount, setAmount] = useState(-1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setAmount(amount + 1)
        if (state.price !== undefined) {
            // Убирать символ $ преобразовать в число и записать в стейт.
            // setTotal((state.price.replace(/\$/, '') * 1) + total);
            setTotal((state.price.replace(/\$/, '') * 1) + total);

        }
        // eslint-disable-next-line
    }, [state.count]);
    console.log(total)

    return (
        <div className="basket">
            <div className="basket__res">{amount}</div>
            <div className="basket__price">{`${total}$`}</div>
        </div>
    )
};

export default Basket;

