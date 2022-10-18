import { useSelector } from 'react-redux';

import './loginView.scss';

const LoginView = () => {

    const userName = useSelector(state => state.user.email);

    return (
        <div className="loginView">
            <h3 className="loginView__title" >Вы вошли как {userName} </h3>

        </div>
    )
}

export default LoginView