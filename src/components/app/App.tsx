import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import MainPage from '../page/MainPage';
import Spinner from '../spinner/Spinner';

import './app.scss';


const StartPage = lazy(() => import('../startPage/StartPage'));
const LoginPage = lazy(() => import('../page/LoginPage'));
const RegisterPage = lazy(() => import('../page/RegisterPage'));
const OurCoffeePage = lazy(() => import('../page/OurCoffeePage'));
const SingleCoffeePage = lazy(() => import('../page/SingleCoffeePage'));
const PleasurePage = lazy(() => import('../page/PleasurePage'));
const FaivoritePage = lazy(() => import('../page/FaivoritePage'));
const BasketPage = lazy(() => import('../page/BasketPage'))
const Page404 = lazy(() => import('../page/404'));

const App = () => {
    return (
        <BrowserRouter>
            <main className="app">
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<StartPage />} />
                        <Route path="/main" element={<MainPage />} />
                        <Route path="/ourCoffee" element={<OurCoffeePage />} />
                        <Route path="/ourCoffee/:coffeeId" element={<SingleCoffeePage />} />
                        <Route path="/pleasure" element={<PleasurePage />} />
                        <Route path="/faivorite" element={<FaivoritePage />} />
                        <Route path="/basket" element={<BasketPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
        </BrowserRouter>
    )
};

export default App;