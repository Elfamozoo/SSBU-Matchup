import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./services/Routes";


function App() {
    return <RouterProvider router={router} />
}

export default App
