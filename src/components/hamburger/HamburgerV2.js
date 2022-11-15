import { useState } from 'react';
import './hamburgerV2.scss';
import './hamburger.scss';

const HamburgerV2 = () => {
    const [modalActive, setModalActive] = useState(false);
    console.log(modalActive)
    return (
        <>
            <button
                onClick={() => setModalActive(true)}
                className='hamburerV2Button'></button>
            <div className={modalActive ? 'hamburgerV2 activeHamburgerV2' : 'hamburgerV2'} onClick={() => setModalActive(false)}>
                <div className={modalActive ? 'hamburgerV2__content activeHamburgerV2' : 'hamburgerV2__content'} onClick={e => e.stopPropagation()}>
                    <div className="hamburger">
                        <div className="hamburger__wrapper">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
};

export default HamburgerV2;