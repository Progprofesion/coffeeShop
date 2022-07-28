import './header.scss';
import '../../styles/fontSize.scss';
import coffeeIcon from './img/coffeeIcon.svg';
import coffeeBeans from './img/coffeeBeansIcon.svg'

const Header = () => {
    return (
        <div className="header">
            <img className="header__img" src={coffeeIcon} alt="coffee" />
            <div className="header__wrapp">
                {/* <div className="header__img"><img src={coffeeIcon} alt="coffee" /></div> */}

                <a className="fz-12" href='#'>Coffee house</a>
                <a className="fz-12" href='#'>Our coffee</a>
                <a className="fz-12" href='#'>For your pleasure</a>
            </div>

            <h1 className="header__title">Everything You Love About Coffee</h1>
            <div className="header__item">
                <div className="header__item-line"></div>
                <img src={coffeeBeans} alt="coffeeBeans" />
                <div className="header__item-line"></div>
            </div>
            <h2 className="header__subtitle">We makes every day full of energy and taste</h2>
            <h2 className="header__subtitleShadow">Want to try our beans?</h2>
            <button className="header__main">More</button>
        </div>
    )
}

export default Header;