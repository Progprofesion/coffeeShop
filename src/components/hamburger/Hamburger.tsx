import { useState } from 'react';
import { Link } from 'react-router-dom';

import ExitLink from '../exitLink/ExitLink';
import hambMenu from 'src/assets/bg/hambMenu.webp';
import logoCoffeeHouse from 'src/assets/icons/logoCoffeeHouse.webp';
import './hamburger.scss';

const Hamburger = () => {
    const [modalActive, setModalActive] = useState(false);

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
                    <img loading="lazy" className='hamburger__bg' src={hambMenu} alt="coffee" />
                    <Link to="/main">
                        <img loading="lazy" className="hamburger__logoCoffeeHouse" src={logoCoffeeHouse} alt='logoCoffeeHouse' />
                    </Link>
                    <Link className="hamburger__link" to="/main">Coffee house</Link>
                    <Link className="hamburger__link" to="/ourcoffee">Our coffee</Link>
                    <Link className="hamburger__link" to="/pleasure">For your pleasure</Link>
                    <Link className="hamburger__link" to="/faivorite">Faivorite</Link>
                    <Link className="hamburger__link" to="/basket">Basket</Link>
                    <ExitLink
                        styleEnter={{ borderBottom: '1px solid gold', width: '100%', padding: "15px" }}
                        styleExit={{ borderBottom: '1px solid gold', width: '100%', padding: "15px" }} />
                </nav>
            </div>

        </>
    )
};

export default Hamburger;