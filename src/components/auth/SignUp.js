import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import Form from '../auth/Form';
import { setUser } from 'src/store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                localStorage.setItem('userEmail', user.email)
                localStorage.setItem('accessToken', user.accessToken)
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
        <div className="enter">
            <Form
                title="Register"
                handleClick={handleRegister}
            />
        </div>
    )
}

export default SignUp