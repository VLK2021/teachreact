import React from 'react';


const Comment = ({comment}) => {
    return (
        <div>
            {comment.id}) - {comment.name}
        </div>
    );
};

export default Comment;