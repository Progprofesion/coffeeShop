import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'src/hooks/useLocalStorage';

import Form from './Form';
import { setUser } from 'src/store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [localAuthEmail, setlocalAuthEmail] = useLocalStorage('userEmail', 0);
    const [localAccessToken, setlocalAccessToken] = useLocalStorage('accessToken', 0);
    const [localId, setlocalId] = useLocalStorage('id', 0);

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                setlocalAuthEmail(user.email)
                setlocalAccessToken(user.accessToken)
                setlocalId(user.uid)
                dispatch(setUser({
                    email: localAuthEmail,
                    token: localAccessToken,
                    id: localId,
                }))
                navigate('/');
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