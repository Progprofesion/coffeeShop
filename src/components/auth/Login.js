import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import Form from './Form';
import { setUser } from 'src/store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                localStorage.setItem('userEmail', user.email)
                localStorage.setItem('accessToken', user.accessToken)
                localStorage.setItem('id', user.uid)
                // setlocalAuthEmail(user.email)
                // setlocalAccessToken(user.accessToken)
                // setlocalId(user.uid)
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
        <div>
            <Form
                title="Login"
                handleClick={handleLogin}
            />
        </div>
    )
};

export default Login