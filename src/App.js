import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';
import {Layout} from "./Layout";
import {LoginPage, RegisterPage} from "./pages";


function App() {


    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'/login'}/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export {App};
