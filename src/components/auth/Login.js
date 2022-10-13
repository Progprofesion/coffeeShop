import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


import Form from '../auth/Form';
import { setUser } from '../../store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid,
                }))
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <div>
            <Form
                title="Login"
                handleClick={handleLogin}
            />
        </div>
    )
};

export default Login