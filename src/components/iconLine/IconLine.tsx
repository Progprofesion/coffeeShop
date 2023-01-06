import { LinkPageInterface } from '../linkPage/LinkPage';

import './iconLine.scss';

const IconLineBlack = ({ img, style, styleLine }: LinkPageInterface) => {
    return (
        <div style={style} className="iconLine">
            <div style={styleLine} className="iconLine__item"></div>
            <img src={img} alt="coffeeBeans" />
            <div style={styleLine} className="iconLine__item"></div>
        </div>
    )
}

export default IconLineBlack;