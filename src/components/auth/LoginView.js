import { useSelector, useDispatch } from 'react-redux';

import { removeUser } from '../../store/slices/userSlice';

import './loginView.scss';

const LoginView = () => {

    const dispatch = useDispatch();
    const userEmail = useSelector(state => state.user.email);

    return (
        <div className="loginView">
            <h3 className="loginView__title" >Вы вошли как {userEmail} </h3>
            <button onClick={() => dispatch(removeUser())}>Выйти</button>
        </div>
    )
}

export default LoginView