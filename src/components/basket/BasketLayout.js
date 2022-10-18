import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import InputMask from "react-input-mask";
import { useRef } from 'react';

import LinkPage from '../linkPage/LinkPage';

import Modal from '../modal/Modal';

import {
    incrementQuantity,
    decrementQuantity,
    basketAmount,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    statePrice,
} from '../basket/basketSlice';

import { useEffect, useState } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import coffeeIconBlack from '../../assets/coffeeIconBlack.svg';

import './basketLyout.scss';

const BasketLayout = () => {

    const inputRef = useRef();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const [modalActive, setModalActive] = useState(false);

    const addProduct = useSelector(state => state.basket.items);
    const stateBasketAmount = useSelector(state => state.basket.amount);
    const totalTest = useSelector(state => state.basket.total);

    // eslint-disable-next-line
    const [localbasketObj, setLocalbasketArr] = useLocalStorage('object', 0);
    const [localBasketAmount, setLocalBasketAmount] = useLocalStorage('amount', 0);
    const [localBasketTotal, setLocalBasketTotal] = useLocalStorage('total', 0);

    const dispatch = useDispatch();

    useEffect(() => {
        setLocalBasketAmount(stateBasketAmount);
        setLocalbasketArr(addProduct);
        setLocalBasketTotal(Number(totalTest));
        dispatch(basketAmount(addProduct));
        // eslint-disable-next-line
    }, [addProduct, stateBasketAmount]);

    const incr = (id, price) => {
        dispatch(statePrice({ price }));
        dispatch(activeIncrTotals(price));
        dispatch(incrementQuantity(id));
    };

    const decr = (id, price) => {
        dispatch(statePrice({ price }));
        dispatch(activeDecrTotals(price));
        dispatch(decrementQuantity(id));
        dispatch(removeProduct(id));
    };

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    let getInputNumbersValue = (input) => {
        return input.value.replace(/\D/g, "");
    }

    let onPhoneinput = (e) => {
        let input = inputRef.current,
            inputNumbersValue = getInputNumbersValue(input),
            formattedInputValue = "",
            selectionStart = input.selectionStart;

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length !== selectionStart) {
            if (e.nativeEvent.data && /\D/g.test(e.nativeEvent.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            // Russian number
            if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            let firstSimbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
            formattedInputValue = firstSimbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
            }
        } else {
            // Not Russian phone number
            formattedInputValue = "+" + inputNumbersValue;
        }
        input.value = formattedInputValue;
    }

    let onPhoneKeyDown = (e) => {
        let input = inputRef.current;
        if (e.keyCode === 8 && getInputNumbersValue(input).length === 1) {
            input.value = "";
        }
    }

    let onPhonePaste = (e) => {
        let pasted = e.clipboardData || window.Clipboard,
            input = inputRef.current,
            inputNumbersValue = getInputNumbersValue(input);

        if (pasted) {
            let pastedText = pasted.getData("Text");
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
            }
        }
    }


    const view = (arr) => {
        return arr.map(({ id, img, title, country, price, quantity }) => {
            return <div key={id} className="basketLayout__wrapp">
                <Link to={`/ourcoffee/${id}`}>
                    <img src={img} alt="coffee" className="basketLayout__img" />
                </Link>
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

    const elements = view(addProduct)

    return (
        <>
            <Modal active={modalActive} setActive={setModalActive} >
                <form onSubmit={handleSubmit(onSubmit)} className="basketLayout__form" action="">
                    <h4 className="basketLayout__title">Оформить заказ</h4>
                    <div className="basketLayout__modalWrapp">
                        <div className="basketLayout__item">
                            <input
                                {...register('name', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {
                                        value: 3,
                                        message: 'Минимум 3 символа'
                                    }
                                })}
                                className="basketLayout__input" placeholder="Имя" type='text' />
                            {errors.name ? <p className="basketLayout__errorMessage" >{errors.name.message}</p> : null}

                        </div>

                        <div className="basketLayout__item">
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

                            {errors.email ? <p className="basketLayout__errorMessage" >{errors.email.message}</p> : null}
                        </div>

                        <div className="basketLayout__item">
                            <input
                                {...register('phone', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {
                                        value: 8,
                                        message: 'Минимум 8 символов',
                                    },
                                    // pattern: {
                                    //     value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                    //     message: 'Только цифры'
                                    // },
                                })}
                                className="basketLayout__input" placeholder="Телефон" type='tel'
                                ref={inputRef}
                                onChange={(e) => onPhoneinput(e)}
                                maxLength="18"
                                onKeyDown={onPhoneKeyDown}
                                onPaste={onPhonePaste} />
                            {errors.phone ? <p className="basketLayout__errorMessage" >{errors.phone.message}</p> : null}
                        </div>

                    </div>
                    <button type='submit' className="basketLayout__btnBuy">Купить</button>
                </form>
            </Modal>

            <LinkPage img={coffeeIconBlack} style={{ margin: '0 auto' }}>
                <Link to='/'>
                    <div className="linkPageBlack__descr fz-12Black">Coffee house</div>
                </Link>
                <Link to='/ourcoffee'>
                    <div className="linkPageBlack__descr fz-12Black">Our coffee</div>
                </Link>
                <Link to="/pleasure">
                    <div className="linkPageBlack__descr fz-12Black">For your pleasure</div>
                </Link>
            </LinkPage>
            <section className="basketLayout">
                <h2 className="basketLayout__title">Shopping cart</h2>
                <h3 className="basketLayout__amount">Amount of products: {localBasketAmount}</h3>
                <h3 className="basketLayout__amount">Total price: {localBasketTotal}</h3>
                {elements}
                <button onClick={() => setModalActive(true)} className="basketLayout__btnBuy">Place an order</button>
            </section>
        </>
    )
};

export default BasketLayout;