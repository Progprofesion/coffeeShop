import { Link } from 'react-router-dom';

import 'animate.css';
import './cardsListItem.scss';

const Cards = ({ page, img, title, country, price }) => {
    return (
        <div className="cards animate__animated animate__flipInX">
            <Link to={`/ourcoffee/${page}`}>
                <div className="cards__item">
                    <img src={img} alt="coffee" />
                </div>
                <h3 className="cards__subtitle fz-14">{title}</h3>
                <div className="cards__country fz-14">{country}</div>
                <p className="cards__price fz-14">{price}</p>
            </Link>
        </div>
    )
};

export default Cards;