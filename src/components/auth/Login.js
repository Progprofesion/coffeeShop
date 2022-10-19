import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import Form from '../auth/Form';
import { setUser } from '../../store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userEmail = useSelector(state => state.user.email);
    const userToken = useSelector(state => state.user.token);
    const userId = useSelector(state => state.user.id);

    const [localAuthEmail, setlocalAuthEmail] = useLocalStorage('userEmail', 0);
    const [localAccessToken, setlocalAccessToken] = useLocalStorage('accessToken', 0);
    const [localId, setlocalId] = useLocalStorage('id', 0);

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user.uid);
                setlocalAuthEmail(user.email)
                setlocalAccessToken(user.accessToken)
                setlocalId(user.uid)
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid,
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