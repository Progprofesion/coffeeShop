import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeUser } from 'src/store/slices/userSlice';

import './hamburger.scss';

const Burger = () => {
    const menuBlock = useRef(null);
    const hamburgerContent = useRef(null);
    const dispatch = useDispatch();

    const activeBurgerClass = (e) => {
        e.preventDefault()
        e.currentTarget.classList.toggle('hamburger__active')
        menuBlock.current.classList.toggle('hamburger__activeMenu')
        hamburgerContent.current.classList.toggle('hamburger__activeContent')
        return
    }

    return (
        <>
            <div className="hamburger"
                onClick={activeBurgerClass}>
                <div className="hamburger__wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div
                className="hamburger__content"
                ref={hamburgerContent}
                onClick={e => e.stopPropagation()}>
                <nav className="hamburger__menu" ref={menuBlock}>
                    <Link to="/">
                        <div className="hamburger__link">Coffee house</div>
                    </Link>
                    <Link to="/ourcoffee">
                        <div className="hamburger__link">Our coffee</div>
                    </Link>
                    <Link to="/pleasure">
                        <div className="hamburger__link">For your pleasure</div>
                    </Link>
                    <Link to="/basket">
                        <div className="hamburger__link">Basket</div>
                    </Link>
                    <button className="loginView__btn" style={{ left: '0px', color: 'antiquewhite' }} onClick={() => dispatch(removeUser())}>Выйти</button>
                </nav>
            </div>
        </>
    )
};

export default Burger