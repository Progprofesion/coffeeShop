import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'src/hooks/redux-hooks';
import Form from './EnterForm';
import { setUser } from 'src/store/slices/userSlice';

import './enter.scss';


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                localStorage.setItem('userEmail', user.email)
                localStorage.setItem('accessToken', user.refreshToken)
                localStorage.setItem('id', user.uid)
            })
            .then(() => {
                dispatch(setUser({
                    email: localStorage.getItem('userEmail'),
                    token: localStorage.getItem('accessToken'),
                    id: localStorage.getItem('id'),
                }))
                navigate('/')
            })
            .catch(() => alert('Invalid user!'));
    }

    return (
        <div className="enter">
            <Form
                title="Login"
                handleClick={handleLogin}
            />
        </div>
    )
};

export default Login