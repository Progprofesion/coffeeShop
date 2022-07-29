import Header from "../header/Header";
import About from "../about/About";
import Best from "../best/best";
import Footer from "../footer/Footer";
import Cards from '../cards/Cards';
import Test from '../../Test';
import './app.scss';


const App = () => {
    return (
        <main className="app">
            <div className="content">
                <Header />
                <About />
                <Best components={Cards} />
                <Footer />
                {/* <Test /> */}
            </div>
        </main>
    )
}

export default App;