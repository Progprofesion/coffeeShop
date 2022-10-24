import { useSelector, useDispatch } from 'react-redux';

import { removeUser } from 'src/store/slices/userSlice';

import './loginView.scss';

const LoginView = () => {

    const dispatch = useDispatch();
    const userEmail = useSelector(state => state.user.email);

    return (
        <div className="loginView">
            <div className="loginView__wrapp" >
                <p className="loginView__wrapp-title" > Вы вошли как:</p>
                <p className="loginView__wrapp-email">{userEmail.replace(/['"]+/g, '')}</p>
            </div>
            <button className="loginView__btn" onClick={() => dispatch(removeUser())}>Выйти</button>
        </div>
    )
}

export default LoginView