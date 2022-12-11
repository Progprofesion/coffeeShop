import './iconLine.scss';

const IconLineBlack = ({ img, style }) => {
    return (
        <div style={style} className="iconLine">
            <div className="iconLine__item"></div>
            <img src={img} alt="coffeeBeans" />
            <div className="iconLine__item"></div>
        </div>
    )
}

export default IconLineBlack;