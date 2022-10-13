import { Link } from 'react-router-dom';
import Login from '../auth/Login';
const LoginPage = () => {

    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>
                or <Link to='/register'>SignUp</Link>
            </p>
        </div>
    )
}

export default LoginPage