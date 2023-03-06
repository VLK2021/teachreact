import React from 'react';
import {useSearchParams} from "react-router-dom";

import Form from "../component/Form/Form";
import Posts from "../component/Posts/Posts";


const Layout = () => {
const [query, setQuery] = useSearchParams();



    return (
        <div>
            <Form setQuery={setQuery}/>
            <Posts query={query}/>
        </div>
    );
};

export default Layout;