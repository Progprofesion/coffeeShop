import './header.scss';
import coffeeIcon from './coffeeIcon.svg'

const Header = () => {
    return (
        <div className="header">

            <div className="header__wrapp">
                <div className="header__img"><img src={coffeeIcon} alt="coffee" /></div>
                <a href='#'>Coffee house</a>
                <a href='#'>Our coffee</a>
                <a href='#'>For your pleasure</a>
            </div>
        </div>
    )
}

export default Header;