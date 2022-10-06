import CardsList from '../cardsList/CardsList';

// eslint-disable-next-line
import AROMISTICOCoffee1kg from '../../img/AROMISTICOCoffee1kg.svg';
// eslint-disable-next-line
import PrestoCoffeeBeans1kg from '../../img/PrestoCoffeeBeans1kg.svg';
// eslint-disable-next-line
import SolimoCooffeeBeans2kg from '../../img/SolimoCooffeeBeans2kg.svg';
// eslint-disable-next-line
import LORCremaAbsoluClassique from '../../img/LORCremaAbsoluClassique.webp';
// eslint-disable-next-line
import LavazzaTierra1KG from '../../img/LavazzaTierra1KG.jpg';
// eslint-disable-next-line
import EvaDiaKenyaGrinders from '../../img/EvaDiaKenyaGrinders.jpg';

import './best.scss';

const Best = () => {
    return (
        <section className="best">
            <div className="container">
                <h2 className="best__title fz-24 ">Our best</h2>
                <CardsList cardsView={3} />
            </div>
        </section>
    )
};

export default Best;