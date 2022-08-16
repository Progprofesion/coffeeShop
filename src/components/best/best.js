import { useGetProductsQuery } from '../api/apiSlice';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import Error from '../../assets/Error.gif';

// eslint-disable-next-line
import AROMISTICOCoffee1kg from '../../img/AROMISTICOCoffee1kg.svg';
// eslint-disable-next-line
import PrestoCoffeeBeans1kg from '../../img/PrestoCoffeeBeans1kg.svg';
// eslint-disable-next-line
import SolimoCooffeeBeans2kg from '../../img/SolimoCooffeeBeans2kg.svg';

import './best.scss';

const Best = () => {

    const {
        data: products = [],
        isLoading,
        isError
    } = useGetProductsQuery();



    const renderCardsList = (arr) => {
        // eslint-disable-next-line
        return arr.map(({ id, page, img, title, price }) => {
            if (id > 3) {
                return (
                    <Link key={id} to={`/ourcoffee/${page}`}>
                        <div className="best__cards">
                            <div className="best__cards-item">
                                <img className="best__cards-img" src={img} alt="coffee" />
                            </div>
                            <h3 className="best__cards-title fz-14">{title}</h3>
                            <p className="best__cards-price fz-14">{price}</p>
                        </div>
                    </Link>
                )
            }
        });
    };

    if (isLoading) {
        return <Spinner />
    } else if (isError) {
        return <img src={Error} alt="error" style={{ 'display': 'block', 'margin': '130px auto 0', 'fontWeight': 'bold', 'fontStyle': '24px', 'marginTop': '130px' }} />
    }

    const elements = renderCardsList(products)

    return (
        <section className="best">
            <div className="container">
                <h2 className="best__title fz-24 ">Our best</h2>
                <div className="best__wrapper">
                    {elements}
                </div>
            </div>
        </section>
    )
};

export default Best;