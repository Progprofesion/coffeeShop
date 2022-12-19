import { Link } from 'react-router-dom';


import ExitLink from '../exitLink/ExitLink';
import IconLine from "../iconLine/IconLine";
import LinkPage from "../linkPage/LinkPage";
import coffeeIcon from 'src/assets/icons/coffeeIcon.svg';
import coffeeBeansIconBlack from "src/assets/icons/coffeeBeansIconBlack.svg";

import './singleCoffeeItem.scss';

const SingleCoffee = ({ img, country, price }) => {
    return (
        <article className="singleCoffeeItem">
            <LinkPage img={coffeeIcon}>
                <Link className="linkPage__link fz-14" to="/" >Coffee house</Link>
                <Link className="linkPage__link fz-14" to="/ourcoffee">Our coffee</Link>
                <Link className="linkPage__link fz-14" to="/pleasure">For your pleasure</Link>
                <Link className="linkPage__link fz-14" to="/basket">Basket</Link>
                <Link className="linkPage__link fz-14" to="/faivorite">Faivorite</Link>
                <ExitLink />
            </LinkPage>
            <div className="container">
                <div className="singleCoffeeItem__wrapper">
                    <img src={img} alt="coffee" className="singleCoffeeItem__img" />
                    <div className="singleCoffeeItem__about">
                        <h3 className="singleCoffeeItem__about-title fz-24">About it</h3>
                        <IconLine img={coffeeBeansIconBlack} />
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
            </div>
        </article>
    )
};

export default SingleCoffee;