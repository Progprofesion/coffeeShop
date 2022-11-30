import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../button/Button';

interface FormProps {
    title: string,
    handleClick: (email: string, pass: string) => void;
}

const EnterForm: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const handleKeyPress = (target: any) => {
        if (target.charCode === 13) {
            handleClick(email, pass)
            console.log('test')
        }
    }



    return (
        <> <form action="">
            <input className="enterView__input"
                {...register('email', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                        value: 3,
                        message: 'Минимум 3 буквы'
                    }
                })}
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            {/* {errors.name ? <p className="basketView__form-errorMessage" >{errors}</p> : null} */}
            <input className="enterView__input"
                type="password"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                onKeyPress={handleKeyPress} />
            {errors.email ? <p className="enterView__input-errorMessage" >{'Минимум 3 буквы'}</p> : null}
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