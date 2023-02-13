import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    //  ???
    // eslint-disable-next-line 
    const [exitEnter, setExitEnter] = useState(false);


    // const userEmail = useSelector((state: RootState) => state.user.email);
    const dispatch = useDispatch();
    const userEmail = localStorage.getItem('userEmail');


    return (
        userEmail ? <div style={styleExit} className={`exitLink fz-14 ${addClass}`} onClick={() => {
            setExitEnter(true)
            dispatch(removeUser())
        }}>Exit</div> :
            <Link className={`linkPage__link ${addClass}`} style={styleEnter} to="/login">Enter</Link>
    )
}

export default ExitLink