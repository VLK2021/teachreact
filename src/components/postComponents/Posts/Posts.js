import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../../store/slices/post.slice";


const Posts = () => {
    const {postsArray} = useSelector(store => store.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);


    return (
        <main>
            {postsArray && postsArray.map(obj => <div key={obj.id}>{obj.title}</div>)}
        </main>
    );
};

export default Posts;