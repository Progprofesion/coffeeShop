import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './loginView.scss';

const LoginView = () => {

    const userEmail = useSelector(state => state.user.email);

    return (
        <div className="loginView">
            <div className="loginView__wrapper" >
                <p className="loginView__wrapper-title" >{userEmail ? 'Вы вошли как:' :
                    <Link className="loginView__btn" to="/login">Enter</Link>}</p>
                {userEmail ? <p className="loginView__wrapper-email">{
                    userEmail.replace(/['"]+/g, '')}</p> : null}
            </div>
        </div>
    )
}

export default LoginView