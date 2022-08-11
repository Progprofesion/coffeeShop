import './iconLine.scss';
import coffeeBeansIconBlack from '../../assets/coffeeBeansIconBlack.svg';

const IconLineBlack = () => {
    return (
        <div className="iconLine">
            <div className="iconLine__item"></div>
            <img src={coffeeBeansIconBlack} alt="coffeeBeans" />
            <div className="iconLine__item"></div>
        </div>
    )
}

export default IconLineBlack;