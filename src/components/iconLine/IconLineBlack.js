import './iconLine.scss';
import coffeeBeansIconBlack from './img/coffeeBeansIconBlack.svg';

const IconLineBlack = () => {
    return (
        <div className="iconLine__item">
            <div className="iconLine__item-line"></div>
            <img src={coffeeBeansIconBlack} alt="coffeeBeans" />
            <div className="iconLine__item-line"></div>
        </div>
    )
}

export default IconLineBlack;