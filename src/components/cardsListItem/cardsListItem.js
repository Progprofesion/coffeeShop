import { Link } from 'react-router-dom';

import AROMISTICOCoffee from '../best/img/AROMISTICOCoffee1kg.svg';

import 'animate.css';
import './cardsList.scss';

const Cards = ({ page, title, country, price }) => {

    return (
        <div className="cards animate__animated animate__flipInX">
            <Link to={`/ourcoffee/${page}`}>
                <div className="cards__item">
                    <img src={AROMISTICOCoffee} alt="coffee" />
                </div>
                <h3 className="cards__subtitle fz-14">{title}</h3>
                <div className="cards__country fz-14">{country}</div>
                <p className="cards__price fz-14">{price}</p>
            </Link>
        </div>
    )
};

export default Cards;