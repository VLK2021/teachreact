import {Route, Routes} from 'react-router-dom';

import './App.css';
import {Layout} from "./Layout";


function App() {


    return (
        <div className="app">
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                </Route>
            </Routes>
        </div>
    );
}

export {App};
