import './basketLyout.scss';
import LinkPageBlack from '../linkPage/LinkPageBlack';
import { useSelector } from 'react-redux';



const BasketLayout = () => {

    const state = useSelector(state => state.basket.stateBasket);
    // const stateTotal = useSelector(state => state.basket.total);
    // console.log(state.country)
    if (state.country !== undefined) {
        let test = state.country
        console.log(test)
    }

    return (
        <>
            <LinkPageBlack />
            <section className="basketLayont">
                <h2 className="basketLayont__title">Shopping cart</h2>
                <h3 className="basketLayont__amount">amount: {state.amount}</h3>
                <div className="basketLayont__wrapp">
                    <img src={state.img} alt="coffee" className="basketLayont__img" />
                    <div className="basketLayont__result">
                        <div className="basketLayont__country">{state.country}</div>
                        <div className="basketLayont__price">{state.total}</div>
                    </div>



                    {/* <div className="basketLayont__country">Country
                        <div className="basketLayont__country-item">{state.country}</div>
                    </div> */}

                </div>
            </section>
        </>
    )
};

export default BasketLayout;