import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";


const Posts = () => {
    let [posts, setPosts] = useState();


    useEffect(()=>{
        userService.getAllPosts()
            .then(value => setPosts(value));
    }, []);

    return (
        <div>
            {
                posts && <select>
                    {
                        posts.map(post => <option key={post.id}>{post.id})- {post.title}</option>)
                    }
                </select>
            }
        </div>
    );
};

export default Posts;