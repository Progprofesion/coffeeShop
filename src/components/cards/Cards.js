import "./cards.scss"
import coffee from "../cards/img/coffee.svg"

const Cards = () => {
    return (
        <div className="cards">
            <div className="cards__item">
                <img src={coffee} alt="" />
            </div>
            <h3 className="cards__subtitle fz-14">Solimo Coffee Beans 2 kg</h3>
            <div className="cards__price fz-14">10.73$</div>
        </div>
    )
}
export default Cards;