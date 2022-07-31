import './ourCoffee.scss';
import girlCoffee from './girlCoffee.svg';
import IconLineBlack from '../iconLine/IconLineBlack';
import LinkPageBlack from '../linkPage/LinkPageBlack';

import CardsFull from '../cards/CardsFull';

import { useGetProductsQuery } from '../api/apiSlice';

const OurCoffee = () => {

    const {
        data: products = [],
        isLoading,
        isError
    } = useGetProductsQuery();

    const search = (id) => {
        products.map(({ id }) => {
            if (id === 1) {
                return
            }
        })
    }

    return (
        <div className="ourcoffee">
            <div className="ourcoffee__about">
                <img src={girlCoffee} alt="" className="ourcoffee__girl" />
                <div className="ourcoffee__descr fz-24">
                    <div className="ourcoffee__title fz-24">About our beans</div>
                    <IconLineBlack />
                    <div className="ourcoffee__text fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                        <br />

                        Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions.<br />
                        As greatly removed calling pleased improve an. Last ask him cold feel <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                        is song that held help face.</div>
                </div>
            </div>
            <div className="ourcoffee__line"></div>
            <div className="ourcoffee__lookiing">
                <div className="ourcoffee__search">
                    <div className="ourcoffee__search-title fz-14">Lookiing for</div>
                    <input type="text" className="ourcoffee__search-input" />
                </div>

                <div className="ourcoffee__filter">
                    <div className="ourcoffee__filter-title fz-14"> Or filter </div>
                    <button onClick={search} className="ourcoffee__filter-Brazil">Brazil</button>
                    <button onClick={search} className="ourcoffee__filter-Kenya">Kenya</button>
                    <button onClick={search} className="ourcoffee__filter-Columbia">Columbia</button>

                </div>
            </div>
            <div className="ourcoffee__cards" >
                <CardsFull />
                <CardsFull />
            </div>
            <div className="ourcoffee__footer">
                <div className="ourcoffee__footer-link">
                    <LinkPageBlack />
                </div>
                <IconLineBlack />
            </div>
        </div>
    )
}

export default OurCoffee;