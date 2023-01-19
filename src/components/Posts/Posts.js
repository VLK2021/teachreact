import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import Post from "../Post/Post";


const Posts = () => {

    let [posts, setPosts] = useState();

    useEffect(()=>{
        userService.getAllPosts()
            .then(value => setPosts(value));
    }, []);


    return (
        <div>
            {
                posts && posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;