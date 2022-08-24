import { useSelector } from 'react-redux';


import './basket.scss';

const Basket = ({ title, price }) => {



    const state = useSelector(state => state.basket.stateBasket);
    console.log(state)



    return (
        <div className="basket">
            <div className="basket__res">{state.title}</div>
            <div className="basket__price">{state.price}</div>
        </div>
    )
};

export default Basket;

