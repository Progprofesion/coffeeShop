import { FC, useState } from 'react';

interface FormProps {
    title: string,
    handleClick: (email: string, pass: string) => void;
}

const EnterForm: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <section  >
            <input className="enter__input"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input className="enter__input"
                type="password"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)} />
            <button className="enter__btn"
                onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </section>
    )
}

export default EnterForm