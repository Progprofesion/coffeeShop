import { Routes, Route, BrowserRouter } from 'react-router-dom'

import MainPage from '../page/MainPage';
import OurCoffeePage from '../page/OurCoffeePage';
import Page404 from '../page/404';
import SingleCoffeePage from '../page/SingleCoffeePage';


import './app.scss';

const App = () => {
    return (
        <BrowserRouter>

            <main className="app">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/ourCoffee" element={<OurCoffeePage />} />
                        <Route path="*" element={<Page404 />} />
                        <Route path="/ourCoffee/:coffeeId" element={<SingleCoffeePage />} />
                    </Routes>


                </div>
            </main>



        </BrowserRouter>

    )
}

export default App;