import { useState } from 'react';

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div >
            <input className="enter__input"
                type="email"
                placeholder="email"
                valuse={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input className="enter__input"
                type="password"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)} />
            <button className="loginView__btn"
                onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    )
}

export default Form