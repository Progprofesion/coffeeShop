import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../button/Button';

interface FormProps {
    title: string,
    handleClick: (email: string, pass: string) => void,
}

const EnterForm: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {
        register,
        formState: { errors },
    } = useForm<{ [x: string]: string }>({
        mode: "onBlur"
    });

    const handleKeyPress = (target: any) => {
        if (target.charCode === 13) {
            handleClick(email, pass)
        }
    }

    return (
        <> <form action="">
            <input className="enterView__input"
                {...register('email', {
                    required: 'Поле обязательно к заполнению',
                    pattern: {
                        // eslint-disable-next-line
                        value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: 'Не правильный адрес почты'
                    }
                })}
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            {errors.email ? <p className="basketView__form-errorMessage" >{errors.email.message}</p> : null}
            <input className="enterView__input"
                {...register('password', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                        value: 6,
                        message: 'Минимум 6 знаков'
                    }
                })}
                type="password"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                onKeyPress={handleKeyPress} />
            {errors.password ? <p className="basketView__form-errorMessage" >{errors.password.message}</p> : null}
        </form>
            <Button
                title={title}
                fn={() => handleClick(email, pass)}
                type='submit'
            />
        </>
    )
}

export default EnterForm