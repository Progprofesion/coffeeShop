import './iconLine.scss';

const IconLineBlack = ({ img, style }) => {
    return (
        <div className="iconLine">
            <div style={style} className="iconLine__item"></div>
            <img src={img} alt="coffeeBeans" />
            <div style={style} className="iconLine__item"></div>
        </div>
    )
}

export default IconLineBlack;