import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import Modal from '../modal/Modal';

import {
    incrementQuantity,
    decrementQuantity,
    basketAmount,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    activeStateBasket,
} from '../basket/basketSlice';

import { useEffect, useState } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import LinkPageBlack from '../linkPage/LinkPageBlack';

import './basketLyout.scss';

const BasketLayout = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const [modalActive, setModalActive] = useState(false);

    const addProductTest = useSelector(state => state.basket.items);
    const stateBasketAmount = useSelector(state => state.basket.amount);
    const totalTest = useSelector(state => state.basket.total);

    const amount = localStorage.getItem('amount')
    const total = localStorage.getItem('total')
    // eslint-disable-next-line
    const [basketObj, setBasketObject] = useLocalStorage('object', 0);

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('amount', stateBasketAmount);
        setBasketObject(addProductTest);
        localStorage.setItem('total', totalTest);
        dispatch(basketAmount(addProductTest));
        // eslint-disable-next-line
    }, [stateBasketAmount, addProductTest, totalTest]);

    const incr = (id, price) => {
        dispatch(activeStateBasket({ price }));
        dispatch(activeIncrTotals(price));
        dispatch(incrementQuantity(id));
    };

    const decr = (id, price) => {
        dispatch(activeStateBasket({ price }));
        dispatch(activeDecrTotals(price));
        dispatch(decrementQuantity(id));
        dispatch(removeProduct(id));
    };

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    const view = (arr) => {
        return arr.map(({ id, img, title, country, price, quantity }) => {
            return <div key={id} className="basketLayout__wrapp">
                <img src={img} alt="coffee" className="basketLayout__img" />
                <div className="basketLayout__quantity">{quantity}</div>
                <div className="basketLayout__result">
                    <div className="basketLayout__title">{title}</div>
                    <div className="basketLayout__country">{country}</div>
                    <div className="basketLayout__price">{price}</div>
                    <div className="basketLayout__btnWrapp">
                        <button onClick={() => incr(id, price)} className="basketLayout__btnWrapp-btn">+</button>
                        <button onClick={() => decr(id, price)} className="basketLayout__btnWrapp-btn">-</button>
                    </div>

                </div>
            </div>
        })
    };

    const elements = view(addProductTest)

    return (
        <>
            <Modal active={modalActive} setActive={setModalActive} >
                <form onSubmit={handleSubmit(onSubmit)} className="basketLayout__form" action="">
                    <h4 className="basketLayout__title">Оформить заказ</h4>
                    <div className="basketLayout__modalWrapp">
                        <input
                            {...register('name', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 3,
                                    message: 'Минимум 3 символа'
                                }
                            })}
                            className="basketLayout__input" placeholder="Имя" type='text' />
                        {errors.name ? <p>{errors.name.message}</p> : null}
                        <input
                            {...register('email', {
                                required: 'Поле обязательно к заполнению',
                                pattern: {
                                    // eslint-disable-next-line
                                    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                    message: 'Не правильный адрес почты'
                                }
                            })}
                            className="basketLayout__input" placeholder="Почта" type='text' />
                        {errors.email ? <p>{errors.email.message}</p> : null}
                        <input
                            {...register('phone', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 8,
                                    message: 'Минимум 8 символов',
                                },
                                pattern: {
                                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                    message: 'Только цифры'
                                },
                            })}
                            className="basketLayout__input" placeholder="Телефон" type='text' />
                        {errors.phone ? <p>{errors.phone.message}</p> : null}
                    </div>
                    <button type='submit' className="basketLayout__btnBuy">Купить</button>
                </form>
            </Modal>

            <LinkPageBlack />
            <section className="basketLayout">
                <h2 className="basketLayout__title">Shopping cart</h2>
                <h3 className="basketLayout__amount">Количество товаров: {amount}</h3>
                <h3 className="basketLayout__amount">Общая сумма: {total}</h3>
                {elements}
                <button onClick={() => setModalActive(true)} className="basketLayout__btnBuy">Купить</button>

            </section>
        </>
    )
};

export default BasketLayout;