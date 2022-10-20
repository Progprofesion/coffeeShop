import { useSelector, useDispatch } from 'react-redux';

import { removeUser } from 'src/store/slices/userSlice';

import './loginView.scss';

const LoginView = () => {

    const dispatch = useDispatch();
    const userEmail = useSelector(state => state.user.email);

    return (
        <div className="loginView">
            <h3 className="loginView__title" >Вы вошли как:
                <div className="loginView__title-email">{userEmail.replace(/['"]+/g, '')}</div>
            </h3>
            <button className="loginView__btn" onClick={() => dispatch(removeUser())}>Выйти</button>
        </div>
    )
}

export default LoginView