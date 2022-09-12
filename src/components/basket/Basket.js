import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import BasketLayout from '../basket/BasketLayout';

import './basket.scss';

const Basket = () => {
    // eslint-disable-next-line
    const state = useSelector(state => state.basket.stateBasket);

    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')

    return (
        <Link to="/basket" className="basket">
            {/* <BasketLayout /> */}
            <div className="basket__amount">{amount ? amount : 0}</div>
            <div className="basket__price">{total ? total : `0.00$`}</div>
        </Link>
    )
};

export default Basket;

