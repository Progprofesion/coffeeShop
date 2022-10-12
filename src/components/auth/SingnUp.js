import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from './Form';
import { setUser } from '../../store/slices/userSlice';

export const SignUp = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="register"
            handleClick={handleRegister} />
    )
}

export default SignUp 
