import { Link } from 'react-router-dom';

import ExitLink from '../exitLink/ExitLink';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="sidebar__wrapp">
                <nav className="sidebar__list">
                    <div className="sideBar__list-itemWrapp">
                        <div className="sidebar__leftBlock"></div>
                        <Link className="sidebar__list-item" to="/main" > <p>Coffee house</p> </Link>
                    </div>
                    <div className="sideBar__list-itemWrapp">
                        <Link className="sidebar__list-item" to="/ourcoffee"> <p>Our coffee</p> </Link>
                        <div className="sidebar__leftBlock"></div>
                    </div>
                    <div className="sideBar__list-itemWrapp">
                        <Link className="sidebar__list-item" to="/pleasure"> <p>For your pleasure</p> </Link>
                        <div className="sidebar__leftBlock"></div>
                    </div>
                    <div className="sideBar__list-itemWrapp">
                        <Link className="sidebar__list-item" to="/faivorite"> <p>Faivorite</p> </Link>
                        <div className="sidebar__leftBlock"></div>
                    </div>
                    <div className="sideBar__list-itemWrapp">
                        <Link className="sidebar__list-item" to="/basket"> <p>Basket</p></Link>
                        <div className="sidebar__leftBlock"></div>
                    </div>
                    <div className="sideBar__list-itemWrapp">
                        <ExitLink
                            addClass='sidebar__list-item'
                            styleEnter={{ borderBottom: '1px solid rgb(120, 175, 197)', width: '100%', padding: "15px" }}
                            styleExit={{ borderBottom: '1px solid rgb(120, 175, 197)', width: '100%', padding: "15px" }} />
                        <div className="sidebar__leftBlock"></div>
                    </div>

                </nav>
            </div>
        </section>
    )
}

export default Sidebar;