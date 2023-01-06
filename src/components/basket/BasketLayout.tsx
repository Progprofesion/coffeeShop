import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { RootState } from 'src/store/index';

import Button from '../button/Button';
import ExitLink from '../exitLink/ExitLink';
import LinkPage from '../linkPage/LinkPage';
import BasketView from './BasketView';
import Hamburger from '../hamburger/Hamburger';
import coffeeIcon from 'src/assets/icons/coffeeIcon.svg';


import { useLocalStorage } from 'src/hooks/useLocalStorage';

import './basketLayout.scss';


import 'animate.css';

interface BasketLayoutInterface {
    setModalActive: (open: boolean) => void;
}

interface BasketLayoutRest {
    id: number
    img: string
    title: string
    country: string
    price: number
    quantity: number
    faivorite: boolean
}

const BasketLayout = ({ setModalActive }: BasketLayoutInterface) => {

    const addProduct = useSelector((state: RootState) => state.basket.items);
    const stateBasketAmount = useSelector((state: RootState) => state.basket.amount);
    const total = useSelector((state: RootState) => state.basket.total);
    const stateArrRender = useSelector((state: RootState) => state.basket.stateStartArr);

    // eslint-disable-next-line
    const [localbasketObj, setLocalbasketObj] = useLocalStorage('object', 0);
    const [localBasketAmount, setLocalBasketAmount] = useLocalStorage('amount', 0);
    const [localBasketTotal, setLocalBasketTotal] = useLocalStorage('total', 0);


    const dispatch = useDispatch();

    useEffect(() => {
        setLocalBasketAmount(stateBasketAmount);
        setLocalbasketObj(addProduct);
        setLocalBasketTotal(Number(total));
        localStorage.setItem('stateArr', JSON.stringify(stateArrRender));
        // eslint-disable-next-line
    }, [addProduct]);


    const view = (arr: []) => {
        return arr.map(({ id, img, title, country, price, quantity, faivorite, ...rest }: BasketLayoutRest) => {

            return <BasketView
                {...rest}
                key={id}
                id={id}
                img={img}
                title={title}
                country={country}
                price={price}
                quantity={quantity}
                faivorite={faivorite} />
        })
    };

    const elements = view(addProduct)

    return (
        <section className="basketLayout">
            <LinkPage img={coffeeIcon} style={{ margin: '0 auto' }}>
                <Link className="linkPage__link fz-14" to="/" >Coffee house</Link>
                <Link className="linkPage__link fz-14" to="/ourcoffee">Our coffee</Link>
                <Link className="linkPage__link fz-14" to="/pleasure">For your pleasure</Link>
                <Link className="linkPage__link fz-14" to="/faivorite">Faivorite</Link>
                <Link className="linkPage__link fz-14" to="/basket">Basket</Link>
                <ExitLink />
            </LinkPage>
            <Hamburger />
            <div className="container">
                <ul className="basketView__layout">
                    <h2 className="basketView__title">Shopping cart</h2>
                    <h3 className="basketView__amount">Amount of goods: {localBasketAmount}</h3>
                    <h3 className="basketView__amount">Total price: {localBasketTotal > 0 ? localBasketTotal.toFixed(2) + `$` : `0.00$`}</h3>
                    <TransitionGroup >
                        {elements.length > 0 ? elements : 'The basket is empty'}
                    </TransitionGroup>
                    <Button
                        title={'Place an order'}
                        fn={() => setModalActive(true)}
                        type='submit' />
                </ul>
            </div>
        </section>
    )
};

export default BasketLayout;