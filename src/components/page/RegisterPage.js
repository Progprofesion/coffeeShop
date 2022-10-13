import { Link } from 'react-router-dom';
import SignUp from '../auth/SignUp';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />
            <p>
                or <Link to='/login'>Login</Link>
            </p>
        </div>
    )
}

export default RegisterPage