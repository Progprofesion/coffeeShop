import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { activeStateBasket } from '../basket/basketSlice';



import 'animate.css';
import './cardsListItem.scss';


const Cards = ({ page, img, title, country, price }) => {
    const dispatch = useDispatch();

    const update = (e) => {
        e.preventDefault();
        // if (e.target.classList.contains('cards__basket')) {
        //     dispatch(activeStateBasket(e))
        // }

        dispatch(activeStateBasket({ title, country, price }))

        // console.log(title)

    }




    return (
        <div
            name='cards'
            onClick={(e) => update(e)}
            className="cards animate__animated animate__flipInX">
            <Link to={`/ourcoffee/${page}`}>
                <div className="cards__item" name='cards' type="text">
                    <img src={img} alt="coffee" />
                </div>
                <h3 className="cards__subtitle fz-14">{title}</h3>
                <div className="cards__country fz-14">{country}</div>
                <div className="cards__price fz-14">{price}</div>
            </Link>
            <button
                className="cards__basket">+1</button>

        </div>
    )
};

export default Cards;