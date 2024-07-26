import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";


function App() {


    return (
        <main className="app">
           <Routes>
               <Route path={'/'} element={<Layout/>}>

               </Route>
           </Routes>
        </main>
    );
}

export {App};
