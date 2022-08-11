import IconLineBlack from "../iconLine/IconLineBlack";
import './singleCoffeeItem.scss';

const SingleCoffee = ({ img, country, price }) => {
    return (
        <div className="singleCoffeeItem">
            <img src={img} alt="coffee" className="singleCoffeeItem__img" />
            <div className="singleCoffeeItem__about">
                <h3 className="singleCoffeeItem__about-title fz-24">About it</h3>
                <IconLineBlack />
                <div className="singleCoffeeItem__about-wrapper">
                    <h4 className="singleCoffeeItem__about-subtitle">Country: </h4>
                    <h4 className="fz-14">{country}</h4>
                </div>
                <p className="singleCoffeeItem__about-descr">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="singleCoffeeItem__about-wrapper">
                    <h4 className="singleCoffeeItem__about-wrapper-price">Price: </h4>
                    <h4 className="fz-24">{price}</h4>
                </div>
            </div>
        </div>
    )
};

export default SingleCoffee;