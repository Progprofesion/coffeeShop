import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import Form from '../auth/Form';
import { setUser } from '../../store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [localAuthEmail, setlocalAuthEmail] = useLocalStorage('userEmail', 0);
    const [localAccessToken, setlocalAccessToken] = useLocalStorage('accessToken', 0);
    const [localId, setlocalId] = useLocalStorage('id', 0);

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
    }
    return (
        <div>
            <Form
                title="Register"
                handleClick={handleRegister}
            />
        </div>
    )
}

export default SignUp