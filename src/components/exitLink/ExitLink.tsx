// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { RootState } from 'src/store/index';

import { removeUser } from 'src/store/slices/userSlice';

import './exitLink.scss';

interface ExitLinkintrface {
    styleExit?: React.CSSProperties
    styleEnter?: React.CSSProperties
    addClass?: string
}

const ExitLink = ({ styleExit, styleEnter, addClass }: ExitLinkintrface) => {

    // const [togleExitEnter, setTogleExitEnter] = useState(true);


    // const userEmail = useSelector((state: RootState) => state.user.email);
    const dispatch = useDispatch();
    const emailView = localStorage.getItem('userEmail');
    // console.log(emailView)

    return (
        emailView !== '' ? <div style={styleExit} className={`exitLink fz-14 ${addClass}`} onClick={(e) => {
            // setTogleExitEnter(false)
            dispatch(removeUser())
        }}>Exit</div> :
            <Link className={`linkPage__link ${addClass}`} style={styleEnter} to="/login">Enter</Link>
    )
}

export default ExitLink