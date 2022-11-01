import { useParams } from 'react-router-dom';
import { useGetProductsIdQuery } from '../api/apiSlice';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeadBanner from '../headBanner/HeadBanner';
import SingleCoffeeItem from '../singleCoffeeItem/SingleCoffeeItem';
import Footer from '../footer/Footer';
import Hamburger from '../hamburger/Hamburger';
import BasketSticky from '../basket/BasketSticky';

import Page404 from './404';
import Spinner from '../spinner/Spinner';

const SingleCoffeePage = () => {
    const id = useParams()

    const { coffeeId } = id;

    const {
        data: products = [],
        isLoading,
        isError
    } = useGetProductsIdQuery(coffeeId);

    if (isLoading) {
        return <Spinner />
    } else if (isError) {
        return <Page404 />
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content={`${products.title} coffee page`} />
                    <title>{products.title}</title>
                </Helmet>
                <Hamburger />
                <BasketSticky title={products.title} price={products.price} />
                <SingleCoffeeItem img={products.img} country={products.country} price={products.price} />
                <Footer />
            </HelmetProvider>
        </>
    )
};

export default SingleCoffeePage;