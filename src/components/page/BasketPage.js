import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import LoginView from '../auth/LoginView';
import Modal from '../modal/Modal';
import BasketLayout from '../basket/BasketLayout';
import Footer from '../footer/Footer';

import { useMask } from 'src/hooks/useMask';

const BasketPage = () => {

    const addProduct = useSelector(state => state.basket.items);
    const total = useSelector(state => state.basket.total);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });


    const inputRef = useRef(null);
    const { ref, ...rest } = register('phone');

    const { onPhoneinput, onPhoneKeyDown, onPhonePaste } = useMask(inputRef);

    const [modalActive, setModalActive] = useState(false);

    const onSubmit = (data) => {
        alert(`Данные пользователя: 
        Телефон: ${data.phone}
        Имя: ${data.name}
        Почта: ${data.email}`)
        alert(`ЗАКАЗ: ${normalData}, 
            Общая сумма: ${JSON.stringify(total)})`);
        reset();
    };

    const normalize = (arr) => {
        return arr.map(({ title, quantity, price, }) => {
            const data = `
            ${title},
            Количество: ${quantity}, Цена: ${price}`;
            return data
        })
    };

    const normalData = normalize(addProduct)

    return (
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content={'Basket page'} />
                <title>Basket</title>
            </Helmet>
            <Modal active={modalActive} setActive={setModalActive} >
                <form onSubmit={handleSubmit(onSubmit)} className="basketView__form" action="">
                    <h4 className="basketView__form-title">Оформить заказ</h4>
                    <div className="basketView__form-modal">
                        <div className="basketView__form-item">
                            <input
                                {...register('name', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {
                                        value: 3,
                                        message: 'Минимум 3 буквы'
                                    }
                                })}
                                className="basketView__form-input" placeholder="Имя" type='text' />
                            {errors.name ? <p className="basketView__form-errorMessage" >{errors.name.message}</p> : null}
                        </div>
                        <div className="basketView__form-item">
                            <input
                                {...register('email', {
                                    required: 'Поле обязательно к заполнению',
                                    pattern: {
                                        // eslint-disable-next-line
                                        value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                        message: 'Не правильный адрес почты'
                                    }
                                })}
                                className="basketView__form-input" placeholder="Почта" type='email' />
                            {errors.email ? <p className="basketView__form-errorMessage" >{errors.email.message}</p> : null}
                        </div>
                        <div className="basketView__form-item">
                            <input
                                {...register('phone', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {
                                        value: 8,
                                        message: 'Минимум 8 символов',
                                    },
                                })}
                                className="basketView__form-input" placeholder="Телефон" type='tel'
                                {...rest} name="phone" ref={(e) => {
                                    ref(e)
                                    inputRef.current = e
                                }}
                                onChange={(e) => onPhoneinput(e)}
                                onKeyDown={onPhoneKeyDown}
                                onPaste={onPhonePaste}
                                maxLength="18"
                            />
                            {errors.phone ? <p className="basketView__form-errorMessage" >{errors.phone.message}</p> : null}
                        </div>
                    </div>
                    <button type='submit' className="basketView__btnBuy">Купить</button>
                </form>
            </Modal>
            <LoginView style={{ display: 'none' }} />
            <BasketLayout setModalActive={setModalActive} />
            <Footer />
        </HelmetProvider>
    )
}

export default BasketPage