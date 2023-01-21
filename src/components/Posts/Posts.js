import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../Post/Post";


const Posts = () => {
    let [posts, setPosts] = useState([]);

    let [query, setQuery] = useSearchParams();

    useEffect(() => {
        postService.getAll().then(value => {
            const title = query.get('title');
            let filter = [...value];
            if (title) {
                filter = value.filter(post => post.title.includes(title));
            }
            setPosts(filter)
        })
    }, [query]);


    const submit = (e) => {
        e.preventDefault()
        setQuery({title: e.target.search.value})
    }


    return (
        <div>
            <div>
                <form onSubmit={submit}>
                    <input type="search" name={'search'}/>
                    <button>search</button>
                </form>
            </div>
            <h1>Posts:</h1>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;