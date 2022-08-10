import AROMISTICOCoffee from '../../assets/JSONimg/AROMISTICOCoffee.svg';
import { Link } from 'react-router-dom';

import 'animate.css';

import './cardsList.scss';


const Cards = ({ page, title, variety, price }) => {

    return (
        <div className="cards animate__animated animate__flipInX">
            <Link to={`/ourcoffee/${page}`}>
                <div className="cards__item">
                    <img src={AROMISTICOCoffee} alt="coffee" />
                </div>
                <h3 className="cards__subtitle fz-14">{title}</h3>
                <div className="cards__variety fz-14">{variety}</div>
                <div className="cards__price fz-14">{price}</div>
            </Link>

        </div>
    )
};



export default Cards;