import { FC } from 'react';
import './button.scss';

interface ButtonProps {
    title: string,
    fn: () => void,
    type: 'submit',
}

const Button: FC<ButtonProps> = ({ title, fn, type }) => {

    return (
        <div className="button" >
            <button
                type={type}
                className="button__view"
                onClick={fn}
            >{title}</button>
        </div>
    )
}

export default Button