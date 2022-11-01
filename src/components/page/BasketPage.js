import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';

import Hamburger from '../hamburger/Hamburger';
import Modal from '../modal/Modal';

import { useMask } from 'src/hooks/useMask';

import BasketLayout from '../basket/BasketLayout';


const BasketPage = () => {
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
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content={'Basket page'} />
                <title>Basket</title>
            </Helmet>
            <Modal active={modalActive} setActive={setModalActive} >
                <form onSubmit={handleSubmit(onSubmit)} className="basketLayout__form" action="">
                    <h4 className="basketLayout__title">Оформить заказ</h4>
                    <div className="basketLayout__modal">
                        <div className="basketLayout__item">
                            <input
                                {...register('name', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {
                                        value: 3,
                                        message: 'Минимум 3 буквы'
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
                                className="basketLayout__input" placeholder="Почта" type='email' />
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
                                })}
                                className="basketLayout__input" placeholder="Телефон" type='tel'
                                {...rest} name="phone" ref={(e) => {
                                    ref(e)
                                    inputRef.current = e
                                }}
                                onChange={(e) => onPhoneinput(e)}
                                onKeyDown={onPhoneKeyDown}
                                onPaste={onPhonePaste}
                                maxLength="18"
                            />
                            {errors.phone ? <p className="basketLayout__errorMessage" >{errors.phone.message}</p> : null}
                        </div>
                    </div>
                    <button type='submit' className="basketLayout__btnBuy">Купить</button>
                </form>
            </Modal>
            <Hamburger />
            <BasketLayout setModalActive={setModalActive} />
        </HelmetProvider>
    )
}

export default BasketPage