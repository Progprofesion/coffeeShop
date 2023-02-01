import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store/index';

import { removeUser } from 'src/store/slices/userSlice';

import './exitLink.scss';

interface ExitLinkintrface {
    styleExit?: React.CSSProperties
    styleEnter?: React.CSSProperties
    addClass?: string
}

const ExitLink = ({ styleExit, styleEnter, addClass }: ExitLinkintrface) => {

    const userEmail = useSelector((state: RootState) => state.user.email);
    const dispatch = useDispatch();
    // const emailView = localStorage.getItem('userEmail');

    return (
        userEmail ? <div style={styleExit} className={`exitLink fz-14 ${addClass}`} onClick={() => dispatch(removeUser())}>Exit</div> : <Link className="linkPage__link fz-14" style={styleEnter} to="/login">Enter</Link>
    )
}

export default ExitLink