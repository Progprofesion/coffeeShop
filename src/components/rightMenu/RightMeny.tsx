import { Link } from 'react-router-dom';

import ExitLink from '../exitLink/ExitLink';
import './rightMenu.scss';

const RightMeny = () => {
    return (
        <section className="rightMenu">
            <div className="rightMenu__icon"></div>
            <div className="rightMenu__wrapp">
                <nav className="rightMenu__list">
                    <Link className="rightMenu__list-item" to="/main" >Coffee house</Link>
                    <Link className="rightMenu__list-item" to="/ourcoffee">Our coffee</Link>
                    <Link className="rightMenu__list-item" to="/pleasure">For your pleasure</Link>
                    <Link className="rightMenu__list-item" to="/faivorite">Faivorite</Link>
                    <Link className="rightMenu__list-item" to="/basket">Basket</Link>
                    <ExitLink
                        addClass='rightMenu__list-item'
                        styleEnter={{ borderBottom: '1px solid rgb(120, 175, 197)', width: '100%', padding: "15px" }}
                        styleExit={{ borderBottom: '1px solid rgb(120, 175, 197)', width: '100%', padding: "15px" }} />
                </nav>
            </div>
        </section>
    )
}

export default RightMeny