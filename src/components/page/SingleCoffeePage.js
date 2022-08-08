import HeadBanner from '../headBanner/HeadBanner';
import IconLineBlack from '../iconLine/IconLineBlack';
import LinkPageBlack from '../linkPage/LinkPageBlack';
import singleCoffee from './img/singleCoffee.svg'
import { useGetProductsIdQuery } from '../api/apiSlice';

import { useParams } from 'react-router-dom';

import './singleCoffeePage.scss';

const SingleCoffeePage = () => {
    const id = useParams()

    const { coffeeId } = id

    const {
        data: products = [],
        isLoading,
        isError
    } = useGetProductsIdQuery(coffeeId);


    return (

        <div >
            <HeadBanner />
            <div className="singleCoffeePage">
                <img src={singleCoffee} alt="coffee" className="singleCoffeePage__img" />
                <div className="singleCoffeePage__about">
                    <h3 className="singleCoffeePage__about-title fz-24">About it</h3>
                    <IconLineBlack />
                    <div className="singleCoffeePage__about-wrapper">
                        <h4 className="singleCoffeePage__about-subtitle">Country: </h4>
                        <h4 className="fz-14">{products.variety}</h4>
                    </div>
                    <p className="singleCoffeePage__about-descr">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="singleCoffeePage__about-wrapper">
                        <h4 className="singleCoffeePage__about-wrapper-price">Price: </h4>
                        <h4 className="fz-24">{products.price}</h4>
                    </div>

                </div>
            </div>
            <LinkPageBlack />
            <IconLineBlack />
        </div>
    )
}

export default SingleCoffeePage;