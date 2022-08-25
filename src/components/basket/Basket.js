import { useSelector } from 'react-redux';

import { useState, useEffect } from 'react';


import './basket.scss';

const Basket = () => {
    const state = useSelector(state => state.basket.stateBasket);

    const [amount, setAmount] = useState(-1);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);



    useEffect(() => {
        setAmount(amount + 1)
        if (state.price !== undefined) {
            let test = state.price.replace(/\$/, '');
            let number = test * 1;
            setCount(number);
        }
        if (count) {
            let res = count + count
            setCount(res);
            console.log(res)
        }
        // eslint-disable-next-line
    }, [state.count]);
    // console.log(count)


    // useEffect(() => {
    //     setCount(number)
    // }, [amount])



    return (
        <div className="basket">
            <div className="basket__res">{amount}</div>
            <div className="basket__price">{`${count}$`}</div>
        </div>
    )
};

export default Basket;

