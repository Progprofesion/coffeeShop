import { Link } from 'react-router-dom';
import SignUp from '../auth/SignUp';

const RegisterPage = () => {
    return (
        <section className="enter">
            <h2 className='enterView__title' >Register</h2>
            <SignUp />
            <p className='enterView__link'>
                or <Link to='/login'>Login</Link>
            </p>
        </section>
    )
}

export default RegisterPage