import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeUser } from 'src/store/slices/userSlice';
import './hamburger.scss';

const Hamburger = () => {
    const [modalActive, setModalActive] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            <div
                onClick={() => setModalActive(true)}
                className={modalActive ? 'hamburgerBtn hamburgerBtn__active' : 'hamburgerBtn'}>
                <div className="hamburgerBtn__wrapper"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={modalActive ? 'hamburger activeHamburger' : 'hamburger'} onClick={() => setModalActive(false)}>
                <nav className={modalActive ? 'hamburger__content activeHamburger' : 'hamburger__content'} onClick={e => e.stopPropagation()}>
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
                    <div className="hamburger__exit" onClick={() => dispatch(removeUser())}>Exit</div>
                </nav>
            </div>
        </>

    )
};

export default Hamburger;