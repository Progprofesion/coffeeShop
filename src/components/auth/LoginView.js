import { useSelector, useDispatch } from 'react-redux';

import { removeUser } from 'src/store/slices/userSlice';

import Button from '../button/Button';

import './loginView.scss';

const LoginView = () => {

    const userEmail = useSelector(state => state.user.email);

    return (
        <div className="loginView">
            <div className="loginView__wrapper" >
                <p className="loginView__wrapper-title" > Вы вошли как:</p>
                <p className="loginView__wrapper-email">{userEmail.replace(/['"]+/g, '')}</p>
            </div>
        </div>
    )
}

export default LoginView