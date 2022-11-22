import { useDispatch } from 'react-redux';

import { removeUser } from 'src/store/slices/userSlice';

import './exitLink.scss';

const ExitLink = ({ style }) => {
    const dispatch = useDispatch();
    return (
        <div style={style} className="exitLink fz-14" onClick={() => dispatch(removeUser())}>Exit</div>
    )
}

export default ExitLink