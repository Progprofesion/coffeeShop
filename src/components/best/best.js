import './best.scss';
import SolimoCooffeeBeans2kg from './img/SolimoCooffeeBeans2kg.svg';
import PrestoCoffeeBeans1kg from './img/PrestoCoffeeBeans1kg.svg';
import AROMISTICOCoffee1kg from './img/AROMISTICOCoffee1kg.svg';

const Best = () => {
    return (
        <section className="best">
            <h2 className="best__title fz-24 ">Our best</h2>
            <div className="best__wrapper">
                <div className="best__cards">
                    <div className="best__cards-item">
                        <img src={SolimoCooffeeBeans2kg} alt="coffee" />
                    </div>
                    <h3 className="best__cards-title fz-14">Solimo Coffee Beans 2 kg</h3>
                    <div className="best__cards-price fz-14">10.73$</div>
                </div>
                <div className="best__cards">
                    <div className="best__cards-item">
                        <img src={PrestoCoffeeBeans1kg} alt="coffee" />
                    </div>
                    <h3 className="best__cards-title fz-14">Presto Coffee Beans 1 kg</h3>
                    <div className="best__cards-price fz-14">15.99$</div>
                </div>
                <div className="best__cards">
                    <div className="best__cards-item">
                        <img className='best__cards-img' src={AROMISTICOCoffee1kg} alt="coffee" />
                    </div>
                    <h3 className="best__cards-title fz-14">AROMISTICO Coffee 1 kg</h3>
                    <div className="best__cards-price fz-14">6.99$</div>
                </div>
            </div>

        </section>
    )
}

export default Best;