import HeadBanner from '../headBanner/HeadBanner';
import IconLineBlack from '../iconLine/IconLineBlack';
import LinkPageBlack from '../linkPage/LinkPageBlack';
import singleCoffee from './img/singleCoffee.svg'
import { useGetProductsIdQuery, useGetProductsQuery } from '../api/apiSlice';

import { useParams } from 'react-router-dom';

import './singleCoffeePage.scss';

const SingleCoffeePage = () => {
    const id = useParams()

    const { coffeeId } = id

    const {
        data: test = [],
        isLoading,
        isError
    } = useGetProductsIdQuery(coffeeId);


    return (

        <div >
            <HeadBanner />
            <div className="singleCoffeePage">
                <img src={singleCoffee} alt="coffee" className="singleCoffeePage__img" />
                <div className="singleCoffeePage__about">
                    <div className="singleCoffeePage__about-title fz-24">About it</div>
                    <IconLineBlack />
                    <div className="singleCoffeePage__about-subtitle">Country: {test.variety}</div>
                    <div className="singleCoffeePage__about-descr">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className="singleCoffeePage__about-price">Price:  {test.price}</div>
                </div>
            </div>
            <LinkPageBlack />
            <IconLineBlack />
        </div>
    )
}

export default SingleCoffeePage;