import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ExitLink from '../exitLink/ExitLink';
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
                    <Link className="hamburger__link" to="/">Coffee house</Link>
                    <Link className="hamburger__link" to="/ourcoffee">Our coffee</Link>
                    <Link className="hamburger__link" to="/pleasure">For your pleasure</Link>
                    <Link className="hamburger__link" to="/basket">Basket</Link>
                    <ExitLink style={{ border: '1px solid antiquewhite', padding: '15px', color: 'antiquewhite' }} />
                </nav>
            </div>
        </>

    )
};

export default Hamburger;