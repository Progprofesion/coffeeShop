

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


    return products.map(({ id, img, title, price }) => {
        return (
            <div key={id} className="cards">
                <div className="cards__item">
                    <img src={img} alt="" />
                </div>
                <h3 className="cards__subtitle fz-14">{title}</h3>
                <div className="cards__price fz-14">{price}</div>
            </div>
        )
    })

}



export default Cards;