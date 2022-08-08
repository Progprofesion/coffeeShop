import { Routes, Route, BrowserRouter } from 'react-router-dom'

import MainPage from '../page/MainPage';
import OurCoffeePage from '../page/OurCoffeePage';
import Page404 from '../page/404';
import SingleCoffeePage from '../page/SingleCoffeePage';
import Pleasure from '../page/Pleasure';


import './app.scss';

const App = () => {
    return (
        <BrowserRouter>

            <main className="app">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/ourCoffee" element={<OurCoffeePage />} />

                        <Route path="/ourCoffee/:coffeeId" element={<SingleCoffeePage />} />
                        <Route path="/pleasure" element={<Pleasure />} />
                        <Route exath path="*" element={<Page404 />} />
                    </Routes>


                </div>
            </main>



        </BrowserRouter>

    )
}

export default App;