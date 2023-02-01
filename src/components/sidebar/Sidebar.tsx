import { Link } from 'react-router-dom';

import ExitLink from '../exitLink/ExitLink';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="sidebar__wrapp">
                <nav className="sidebar__list">
                    <Link className="sidebar__list-item" to="/main" > <p>Coffee house</p> </Link>
                    <Link className="sidebar__list-item" to="/ourcoffee"> <p>Our coffee</p> </Link>
                    <Link className="sidebar__list-item" to="/pleasure"> <p>For your pleasure</p> </Link>
                    <Link className="sidebar__list-item" to="/faivorite"> <p>Faivorite</p> </Link>
                    <Link className="sidebar__list-item" to="/basket"> <p>Basket</p></Link>
                    <ExitLink
                        addClass='sidebar__list-item'
                        styleEnter={{ borderBottom: '1px solid rgb(120, 175, 197)', width: '100%', padding: "15px" }}
                        styleExit={{ borderBottom: '1px solid rgb(120, 175, 197)', width: '100%', padding: "15px" }} />
                </nav>
            </div>
        </section>
    )
}

export default Sidebar;