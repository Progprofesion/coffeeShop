import { Link } from 'react-router-dom';

import 'animate.css';
import './cardsListItem.scss';

const Cards = ({ id, img, title, country, price, quantity, basketIncr, basketDecr }) => {

    return (
        <div
            name='cards'
            className="cards  animate__animated animate__flipInX ">
            <div className="cards__item" name='cards' type="text">
                <Link to={`/ourcoffee/${id}`}>
                    <img className="cards__img" src={img} alt="coffee" />
                </Link>
            </div>
            <h3 className="cards__subtitle fz-14">{title}</h3>
            <div className="cards__country fz-14">{country}
                <div className="cards__amount">{quantity}</div>
            </div>
            <div className="cards__price fz-14">{price}</div>
            <button
                onClick={basketIncr}
                className="cards__basketIncr">+1</button>
            <button
                onClick={basketDecr}
                className="cards__basketDecr">-1</button>
        </div>
    )
};

export default Cards;