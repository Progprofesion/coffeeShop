import { Link } from 'react-router-dom';

import basketIcon2 from '../../assets/icons/basketIcon2.svg';

import 'animate.css';
import './cardsListItem.scss';

const CardsListItem = ({ id, img, title, country, price, quantity, basketIncr, basketIncr10, basketDecr }) => {
    return (
        <div
            name='cards'
            className="cardsListItem  animate__animated animate__flipInX ">
            <div className="cardsListItem__item" name='cards' type="text">
                <Link to={`/ourcoffee/${id}`}>
                    <img className="cardsListItem__img" src={img} alt="coffee" />
                </Link>
            </div>
            <h3 className="cardsListItem__subtitle fz-14Black">{title}</h3>
            <div className="cardsListItem__country fz-14Black">
                <div>{country}</div>
                <button onClick={basketIncr10} className="cardsListItem__incr10">+10</button>
                <Link to="/basket">
                    <img className="cardsListItem__basket" src={basketIcon2} alt="BasketIcon" />
                </Link>
            </div>
            <div className="cardsListItem__price fz-14Black">{price}</div>
            <div className="cardsListItem__wrapper">
                <button
                    onClick={basketDecr}
                    className="cardsListItem__wrapper-btn">-</button>
                <div className="cardsListItem__amount">{quantity}</div>
                <button
                    onClick={basketIncr}
                    className="cardsListItem__wrapper-btn">+</button>
            </div>
        </div>
    )
};

export default CardsListItem;