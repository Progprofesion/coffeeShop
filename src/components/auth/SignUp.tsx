import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import Form from './EnterForm';
import { setUser } from 'src/store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                localStorage.setItem('userEmail', user.email)
                localStorage.setItem('accessToken', user.refreshToken)
                localStorage.setItem('id', user.uid)
                dispatch(setUser({
                    email: localStorage.getItem('userEmail'),
                    token: localStorage.getItem('accessToken'),
                    id: localStorage.getItem('id'),
                }))
                navigate('/');
            })
            .catch(() => alert('Invalid user!'));
    }
    return (
        <section className="enterView">
            <Form
                title="Register"
                handleClick={handleRegister}
            />
        </section>
    )
}

export default SignUp