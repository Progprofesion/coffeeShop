import './LinkPage.scss';
import coffeeIcon from './coffeeIcon.svg'

const LinkPage = () => {
    return (
        <div className="linkPage">
            <img className="linkPage__img" src={coffeeIcon} alt="coffee" />
            <a className="fz-12" href='#'>Coffee house</a>
            <a className="fz-12" href='#'>Our coffee</a>
            <a className="fz-12" href='#'>For your pleasure</a>
        </div>
    )
}

export default LinkPage;