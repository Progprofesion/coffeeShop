import { useAppSelector } from './redux-hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
const useAuth = () => {

    // const { email, token, id } = useSelector(state: RootState => state.user);
    const { email, token, id } = useSelector((state: RootState) => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id
    };
}

export default useAuth;