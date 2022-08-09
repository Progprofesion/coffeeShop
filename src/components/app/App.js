import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import MainPage from '../page/MainPage';
import Spinner from '../spinner/Spinner';

import './app.scss';

// const MainPage = lazy(() => import('../page/MainPage'));
const Page404 = lazy(() => import('../page/404'));
const OurCoffeePage = lazy(() => import('../page/OurCoffeePage'));
const SingleCoffeePage = lazy(() => import('../page/SingleCoffeePage'));
const PleasurePage = lazy(() => import('../page/PleasurePage'));



const App = () => {
    return (
        <BrowserRouter>

            <main className="app">
                <div className="content">
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/ourCoffee" element={<OurCoffeePage />} />

                            <Route path="/ourCoffee/:coffeeId" element={<SingleCoffeePage />} />
                            <Route path="/pleasure" element={<PleasurePage />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </div>
            </main>
        </BrowserRouter>

    )
}

export default App;