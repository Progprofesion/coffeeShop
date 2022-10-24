import { Link } from 'react-router-dom';
import Login from '../auth/Login';

const LoginPage = () => {
    return (
        <section >
            <h2 className='enter__title'>Login</h2>
            <Login />
            <p className='enter__link'>
                or <Link to='/register'>SignUp</Link>
            </p>
        </section>
    )
}

export default LoginPage