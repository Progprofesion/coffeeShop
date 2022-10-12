import { Link } from 'react-router-dom';
import Login from '../auth/Login';

const LoginPage = () => {
    return (
        <div>
            <h1>LoginPage</h1>
            <Login />
            <p>
                Or <Link to='/register'>Register</Link>
            </p>
        </div>
    )
}

export default LoginPage