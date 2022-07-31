// import { Routes, Route, BrowserRouter } from 'react-router-dom'

import MainPage from '../page/MainPage';

import './app.scss';

const App = () => {
    return (
        <main className="app">
            <div className="content">
                <MainPage />
            </div>
        </main>
    )
}

export default App;