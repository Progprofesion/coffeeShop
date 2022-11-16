import { useAppSelector } from './redux-hooks';

const useAuth = () => {
    const { email, token, id } = useAppSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id
    };
}

export default useAuth;