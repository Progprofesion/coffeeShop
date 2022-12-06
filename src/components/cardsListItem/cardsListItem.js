import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { randomNumber } from 'src/store/slices/basketSlice';

import basketIcon from 'src/assets/icons/basketIcon.svg';

import 'animate.css';
import './cardsListItem.scss';

const CardsListItem = ({ id, img, title, country, price, quantity, basketIncr, basketIncr10, basketDecr }) => {
    const stateRandom = useSelector(state => state.basket.stateRandom);

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = () => {
        reset();
    };
    // console.log(stateRandom)

    return (
        <div
            name='cards'
            className="cardsListItem  animate__animated animate__flipInX ">
            <div className="cardsListItem__item" name='cards' type="text">
                <Link to={`/ourcoffee/${id}`}>
                    <img className="cardsListItem__img" src={img} alt="coffee" />
                </Link>
            </div>
            <h3 className="cardsListItem__subtitle fz-14Black">{title}</h3>
            <div className="cardsListItem__country fz-14Black">
                <div>{country}</div>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <input
                        {...register('number', {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Please enter a number',
                            },
                            minLength: {
                                value: /^\d+$/,
                                message: 'Нажмите Enter',
                            }
                        })}
                        value={value.replace(/[A-Za-zА-Яа-яЁё.,]/, '')}
                        maxLength={2}
                        onKeyDown={e => basketIncr10(e, stateRandom)}
                        onChange={e => {
                            dispatch(randomNumber(e.target.value))
                            setValue(e.target.value)
                        }}
                        className="cardsListItem__incr10" placeholder="00" type='text' />
                    {errors.number ? <p className="basketView__form-errorMessage" >{errors.number.message}</p> : null}
                    <button>asd</button>
                </form>
                <Link to="/basket">
                    <img className="cardsListItem__basket" src={basketIcon} alt="BasketIcon" />
                </Link>
            </div>
            <div className="cardsListItem__price fz-14Black">{price}</div>
            <div className="cardsListItem__wrapper">
                <button
                    onClick={basketDecr}
                    className="cardsListItem__wrapper-btn">-</button>
                <div className="cardsListItem__amount">{quantity}</div>
                <button
                    onClick={basketIncr}
                    className="cardsListItem__wrapper-btn">+</button>
            </div>
        </div >
    )
};

export default CardsListItem;