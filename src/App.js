import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Users from "./components/userComponents/Users/Users";
import Posts from "./components/postComponents/Posts/Posts";
import Comments from "./components/commentsComponents/Comments/Comments";
import UserDetail from "./components/userComponents/UserDetail/UserDetail";


function App() {


    return (
        <main className="app">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'users/:id'} element={<UserDetail/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export {App};
