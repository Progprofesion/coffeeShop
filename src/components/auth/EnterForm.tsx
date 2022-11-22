import { FC, useState } from 'react';

import Button from '../button/Button';

interface FormProps {
    title: string,
    handleClick: (email: string, pass: string) => void;
}

const EnterForm: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <>
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
            <Button
                title={title}
                fn={() => handleClick(email, pass)}
                type='submit'
            />
        </>
    )
}

export default EnterForm