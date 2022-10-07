import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './hamburger.scss';

const Burger = () => {
    const menuBlock = useRef(null)

    const activeBurgerClass = (e) => {
        e.preventDefault()
        e.currentTarget.classList.toggle('hamburger__active')
        menuBlock.current.classList.toggle('menu__active')
        return
    }

    return (
        <>
            <div className="hamburger"
                onClick={activeBurgerClass}>
                <div className="hamburger__wrapp">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="menu" ref={menuBlock}>
                <Link to="/">
                    <div className="menu__link">Coffee house</div>
                </Link>
                <Link to="/ourcoffee">
                    <div className="menu__link">Our coffee</div>
                </Link>
                <Link to="/pleasure">
                    <div className="menu__link">For your pleasure</div>
                </Link>
                <Link to="/basket">
                    <div className="menu__link">Basket</div>
                </Link>
            </div>
        </>
    )
};

export default Burger