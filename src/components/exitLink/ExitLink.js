import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { removeUser } from 'src/store/slices/userSlice';

import './exitLink.scss';

const ExitLink = ({ style }) => {
    const userEmail = useSelector(state => state.user.email);
    const dispatch = useDispatch();
    return (
        userEmail ? <div style={style} className="exitLink fz-14" onClick={() => dispatch(removeUser())}>Exit</div> : <Link className="linkPage__link fz-14" style={style} to="/login">Enter</Link>
    )
}

export default ExitLink