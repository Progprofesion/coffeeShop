import { Link } from 'react-router-dom';
import SignUp from '../auth/SignUp';

const RegisterPage = () => {
    return (
        <>
            <h2 className='enter__title' >Register</h2>
            <SignUp />
            <p className='enter__link'>
                or <Link to='/login'>Login</Link>
            </p>
        </>
    )
}

export default RegisterPage