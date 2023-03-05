import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from "./Layout/Layout";


function App() {


    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                </Route>
            </Routes>

        </div>
    );
}

export default App;
