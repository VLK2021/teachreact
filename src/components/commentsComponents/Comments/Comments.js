import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../../store/slices/comment.slice";


const Comments = () => {
    const {commentsArray} = useSelector(store => store.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, []);


    return (
        <main>
            {commentsArray && commentsArray.map(obj => <div key={obj.id}>{obj.body}</div>)}
        </main>
    );
};

export default Comments;