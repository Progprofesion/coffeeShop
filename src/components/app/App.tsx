import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import StartPage from '../startPage/StartPage';
import MainPage from '../page/MainPage';
import Spinner from '../spinner/Spinner';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';

import './app.scss';

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
                        <Route path="/" element={<MainPage />} />
                        <Route path="/startPage" element={<StartPage />} />
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