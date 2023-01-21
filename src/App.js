import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import UserDetails from "./components/UserDetails/UserDetails";


function App() {


    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                    </Route>
                    <Route path={'/posts'} element={<Posts/>}/>
                    <Route path={'/comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
