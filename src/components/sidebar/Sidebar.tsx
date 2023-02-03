import { Link } from 'react-router-dom';

import ExitLink from '../exitLink/ExitLink';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="sidebar__wrapp">
                <nav className="sidebar__list">
                    <Link className="sidebar__list-item animate__animated animate__fadeIn" to="/main" > <p className='animate__animated animate__fadeIn'>Coffee house</p> </Link>
                    <Link className="sidebar__list-item animate__animated animate__fadeIn" to="/ourcoffee"> <p className='animate__animated animate__fadeIn'>Our coffee</p> </Link>
                    <Link className="sidebar__list-item animate__animated animate__fadeIn" to="/pleasure"> <p className='animate__animated animate__fadeIn'>For your <br /> pleasure</p> </Link>
                    <Link className="sidebar__list-item animate__animated animate__fadeIn" to="/faivorite"> <p className='animate__animated animate__fadeIn'>Faivorite</p> </Link>
                    <Link className="sidebar__list-item animate__animated animate__fadeIn" to="/basket"> <p className='animate__animated animate__fadeIn'>Basket</p></Link>
                    <ExitLink
                        addClass='sidebar__list-item'
                        styleEnter={{ borderBottom: '1px solid rgb(120, 175, 197)', width: '100%', padding: "15px", color: "gold" }}
                        styleExit={{ borderBottom: '1px solid rgb(120, 175, 197)', width: '100%', padding: "15px", color: "gold" }} />
                </nav>
            </div>
        </section>
    )
}

export default Sidebar;