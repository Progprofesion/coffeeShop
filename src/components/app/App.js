import Header from "../header/Header";
import About from "../about/About";
import Best from "../best/best";
import Footer from "../footer/Footer";
import './app.scss';


const App = () => {
    return (
        <main className="app">
            <div className="content">
                <Header />
                <About />
                <Best />
                <Footer />
            </div>
        </main>
    )
}

export default App;