import AROMISTICOCoffee from '../../assets/JSONimg/AROMISTICOCoffee.svg';
// import PrestoCoffeeBeans from '../../assets/JSONimg/PrestoCoffeeBeans.svg';
// import SolimoCoffeeBeans from '../../assets/JSONimg/SolimoCoffeeBeans.svg';

import { useGetProductsQuery } from '../api/apiSlice';

import "./cardsFull.scss"

const CardsFull = () => {
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
            <div key={id} className="cardsFull">
                <div className="cardsFull__item">
                    <img src={AROMISTICOCoffee} alt="coffee" />
                </div>
                <h3 className="cardsFull__subtitle fz-14">{title}</h3>
                <div className="cardsFull__variety fz-14">{variety}</div>
                <div className="cardsFull__price fz-14">{price}</div>
            </div>
        )
    })
};



export default CardsFull;