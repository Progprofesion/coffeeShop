// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/index';

import './loginView.scss';

const LoginView = () => {
    // const [togleExitEnter, setTogleExitEnter] = useState(false);
    // eslint-disable-next-line
    const userEmail = useSelector((state: RootState) => state.user.email);
    // const usedrId = useSelector((state: RootState) => state.user.id);
    const emailView = localStorage.getItem('userEmail');

    // useEffect(() => {
    //     setTogleExitEnter(true)
    // }, [usedrId])


    // console.log(togleExitEnter)


    return (
        emailView ? <div className="loginView">
            <div className="loginView__wrapper" >
                <p className="loginView__wrapper-title" >Вы вошли как:</p>
                <p className="loginView__wrapper-email" >{emailView!.replace(/['"]+/g, '')}</p>
            </div>
        </div> : null
    )
}

export default LoginView