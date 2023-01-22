import {Route, Routes, Navigate} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import UserDetails from "./components/UserDetails/UserDetails";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Login from "./components/Login/Login";
import RequireAuth from "./hightOrderComponent/RequireAuth";
import AuthProvider from "./hightOrderComponent/AuthProvider";


function App() {


    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'/users'} element={<Users/>}>
                            <Route path={':id'} element={<UserDetails/>}/>
                        </Route>
                        <Route path={'/posts'} element={
                            <RequireAuth>
                                <Posts/>
                            </RequireAuth>}/>
                        <Route path={'/comments'} element={<Comments/>}/>
                        <Route path={'/comments-ua'} element={<Navigate to={'/comments'}/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
