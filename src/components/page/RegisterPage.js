import { Link } from 'react-router-dom';


const RegisterPage = () => {
    return (
        <div>
            <p>Register</p>
            <p>
                Already have an account?  <Link to="/login" >Sign in</Link>
            </p>
        </div>
    )
}

export default RegisterPage