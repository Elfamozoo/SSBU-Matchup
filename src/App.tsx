import './App.css'
import Navbar from "./components/Navbar/Navbar";
import {useRoutes} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import routes from './services/Routes'

function App() {
    const routing = useRoutes(routes);
    return (
        <>
            <Navbar/>
            {routing}
            <Footer/>
        </>
    )
}

export default App
