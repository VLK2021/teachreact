import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/comments.service";
import Comment from "../Comment/Comment";


const Comments = () => {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => setComments(value))
    }, []);


    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;