import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeUser } from 'src/store/slices/userSlice';
import './hamburgerV2.scss';
import './hamburger.scss';

const HamburgerV2 = () => {
    const [modalActive, setModalActive] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            <div
                onClick={() => setModalActive(true || false)}
                className={modalActive ? 'hamburger hamburger__active' : 'hamburger'}>
                <div className="hamburger__wrapper"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={modalActive ? 'hamburgerV2 activeHamburgerV2' : 'hamburgerV2'} onClick={() => setModalActive(false)}>
                <nav className={modalActive ? 'hamburgerV2__content activeHamburgerV2' : 'hamburgerV2__content'} onClick={e => e.stopPropagation()}>
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

export default HamburgerV2;