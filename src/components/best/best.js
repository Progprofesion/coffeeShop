import './best.scss';
import Cards from '../cards/Cards';

const Best = () => {
    return (
        <section className="best">
            <h2 className="best__title fz-24 ">Our best</h2>
            <div className="best__wrapper">
                <Cards />
            </div>

        </section>
    )
}

export default Best;