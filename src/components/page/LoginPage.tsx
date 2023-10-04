import { Link } from 'react-router-dom';
import Login from '../auth/Login';

const LoginPage = () => {
    return (
        <section className="enter">
            <h2 className='enterView__title'>Login</h2>
            <Login />
            <p className='enterView__link'>
                or <Link to='/register'>SignUp</Link>
            </p>
        </section>
    )
}

export default LoginPage