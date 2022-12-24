import { useSelector } from 'react-redux';
import { RootState } from 'src/store/index';

import './loginView.scss';

const LoginView = () => {

    const userEmail = useSelector((state: RootState) => state.user.email);

    return (
        userEmail ? <div className="loginView">
            <div className="loginView__wrapper" >
                <p className="loginView__wrapper-title" >Вы вошли как:</p>
                <p className="loginView__wrapper-email">{userEmail.replace(/['"]+/g, '')}</p>
            </div>
        </div> : null
    )
}

export default LoginView