import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import Form from './EnterForm';
import { setUser } from 'src/store/slices/userSlice';

import './enterView.scss';


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                localStorage.setItem('userEmail', user.email || '')
                localStorage.setItem('accessToken', user.refreshToken)
                localStorage.setItem('id', user.uid)
            })
            .then(() => {
                (setUser({
                    email: localStorage.getItem('userEmail'),
                    token: localStorage.getItem('accessToken'),
                    id: localStorage.getItem('id'),
                }))
                navigate('/')
            })
            .catch(() => alert('Invalid user!'));
    }

    return (
        <section className="enterView">
            <Form
                title="Login"
                handleClick={handleLogin}
            />
        </section>
    )
};

export default Login