import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import Form from './EnterForm';
import { setUser } from 'src/store/slices/userSlice';
import { useLocalStorage } from "src/hooks/useLocalStorage";

import './enterView.scss';


const Login = () => {

    const [localEmail, setLocalEmail] = useLocalStorage('userEmail', 0);
    const [localToken, setLocalToken] = useLocalStorage('accessToken', 0);
    const [localId, setLocalid] = useLocalStorage('id', 0);

    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                setLocalEmail(user.email)
                setLocalToken(user.refreshToken)
                setLocalid(user.uid)
            })
            .then(() => {
                (setUser({
                    email: localEmail,
                    token: localToken,
                    id: localId,
                }))
                navigate('/main')
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