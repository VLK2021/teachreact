import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import Users from "./components/users/Users/Users";
import Posts from "./components/posts/Posts/Posts";
import Comments from "./components/comments/Comments/Comments";



function App() {


    return (
        <main className="app">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export {App};
