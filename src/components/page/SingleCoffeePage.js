import HeadBanner from '../headBanner/HeadBanner';
import IconLineBlack from '../iconLine/IconLineBlack';
import LinkPageBlack from '../linkPage/LinkPageBlack';
import singleCoffee from './img/singleCoffee.svg'
import test1 from './img/test1.svg';
import test2 from './img/test2.svg';


import './singleCoffeePage.scss';

const SingleCoffeePage = () => {
    return (
        <div >
            <HeadBanner />
            <div className="singleCoffeePage">
                <img src={test2} alt="coffee" className="singleCoffeePage__img" />
                <div className="singleCoffeePage__about">
                    <div className="singleCoffeePage__about-title fz-24">About it</div>
                    <IconLineBlack />
                    <div className="singleCoffeePage__about-subtitle">Country: Brasil</div>
                    <div className="singleCoffeePage__about-descr">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className="singleCoffeePage__about-price">Price:  16.99$</div>
                </div>
            </div>
            <LinkPageBlack />
            <IconLineBlack />
        </div>
    )
}

export default SingleCoffeePage;