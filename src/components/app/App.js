import { Routes, Route, BrowserRouter } from 'react-router-dom'

import MainPage from '../page/MainPage';
import OurCoffeePage from '../page/OurCoffeePage';

import './app.scss';

const App = () => {
    return (
        <BrowserRouter>

            <main className="app">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/ourCoffee" element={<OurCoffeePage />} />
                    </Routes>

                </div>
            </main>



        </BrowserRouter>

    )
}

export default App;