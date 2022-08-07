import AROMISTICOCoffee from '../../assets/JSONimg/AROMISTICOCoffee.svg';
import { Link } from 'react-router-dom';
// import PrestoCoffeeBeans from '../../assets/JSONimg/PrestoCoffeeBeans.svg';
// import SolimoCoffeeBeans from '../../assets/JSONimg/SolimoCoffeeBeans.svg';

import './cardsList.scss';

const Cards = ({ id, idd, title, variety, price }) => {

    return (
        <div className="cards">
            <Link to={`/ourcoffee/${idd}`}>

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