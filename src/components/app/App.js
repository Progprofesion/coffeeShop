import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import useAuth from '../../hooks/use-auth';

import MainPage from '../page/MainPage';
import Spinner from '../spinner/Spinner';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';

import './app.scss';

const OurCoffeePage = lazy(() => import('../page/OurCoffeePage'));
const SingleCoffeePage = lazy(() => import('../page/SingleCoffeePage'));
const PleasurePage = lazy(() => import('../page/PleasurePage'));
const BasketLayout = lazy(() => import('../basket/BasketLayout'));
const Page404 = lazy(() => import('../page/404'));

const App = () => {
    const { isAuth } = useAuth();
    return isAuth ? (
        <BrowserRouter>
            <main className="app">
                <div className="content">
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/ourCoffee" element={<OurCoffeePage />} />
                            <Route path="/ourCoffee/:coffeeId" element={<SingleCoffeePage />} />
                            <Route path="/pleasure" element={<PleasurePage />} />
                            <Route path="/basket" element={<BasketLayout />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </div>
            </main>
        </BrowserRouter>
    ) : (
        <BrowserRouter>
            <main className="app">
                <div className="content">
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="*" element={<Navigate to='/login' />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    </Suspense>
                </div>
            </main>
        </BrowserRouter>
    )
};

export default App;