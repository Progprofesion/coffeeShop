import AROMISTICOCoffee from '../../assets/JSONimg/AROMISTICOCoffee.svg';
// import PrestoCoffeeBeans from '../../assets/JSONimg/PrestoCoffeeBeans.svg';
// import SolimoCoffeeBeans from '../../assets/JSONimg/SolimoCoffeeBeans.svg';

import { useGetProductsQuery } from '../api/apiSlice';

import "./cards.scss"

const Cards = () => {
    const {
        data: products = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    if (isLoading) {
        return <div>Loading</div>
    } else if (isError) {
        return <div>Error</div>
    }

    return products.map(({ id, title, variety, price }) => {
        return (
            <div key={id} className="cards">
                <div className="cards__item">
                    <img src={AROMISTICOCoffee} alt="coffee" />
                </div>
                <h3 className="cards__subtitle fz-14">{title}</h3>
                <div className="cards__variety fz-14">{variety}</div>
                <div className="cards__price fz-14">{price}</div>
            </div>
        )
    })
};



export default Cards;