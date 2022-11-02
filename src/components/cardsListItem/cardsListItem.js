import { Link } from 'react-router-dom';

import 'animate.css';
import './cardsListItem.scss';

const CardsListItem = ({ id, img, title, country, price, quantity, basketIncr, basketDecr }) => {

    return (
        <div
            name='cards'
            className="cardsListItem  animate__animated animate__flipInX ">
            <div className="cardsListItem__item" name='cards' type="text">
                <Link to={`/ourcoffee/${id}`}>
                    <img className="cardsListItem__img" src={img} alt="coffee" />
                </Link>
            </div>
            <h3 className="cardsListItem__subtitle fz-14">{title}</h3>
            <div className="cardsListItem__country fz-14">{country}
                <div className="cardsListItem__amount">{quantity}</div>
            </div>
            <div className="cardsListItem__price fz-14">{price}</div>
            <button
                onClick={basketIncr}
                className="cardsListItem__basketIncr">+1</button>
            <button
                onClick={basketDecr}
                className="cardsListItem__basketDecr">-1</button>
        </div>
    )
};

export default CardsListItem;