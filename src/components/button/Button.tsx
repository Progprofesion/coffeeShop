import { FC } from 'react';
import './button.scss';

interface ButtonProps {
    title: string
    fn?: () => void
    type: 'submit'
    disabled?: boolean
    style?: {}
}

const Button: FC<ButtonProps> = ({ title, fn, type, disabled }) => {

    return (
        <div className="button" >
            <button
                type={type}
                className="button__view"
                onClick={fn}
                disabled={disabled}
            >{title}</button>
        </div>
    )
}

export default Button