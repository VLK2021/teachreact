import {Route, Routes} from 'react-router-dom';

import './App.css';
import Layout from "./Layout/Layout";


function App() {


    return (
        <div className="App">
            <Routes>
                <Route index element={<Layout/>}>

                </Route>
            </Routes>
        </div>
    );
}

export {App};
