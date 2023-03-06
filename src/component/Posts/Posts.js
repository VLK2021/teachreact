import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import Post from "../Post/Post";


const Posts = ({query}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => {
            const tittle = query.get('title');
            let filter = [...value];
            if (tittle) {
                filter = value.filter(post => post.title.includes(tittle));
            }
            setPosts(filter);
        });
    }, [query]);


    return (
        <div>
            {
                posts && posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;