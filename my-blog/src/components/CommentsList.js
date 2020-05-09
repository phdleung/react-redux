import React from 'react';

const CommentsList = ({ comments }) => (
  <>
    <div className="ui feed">
      <h3 className="ui dividing header">Comments:</h3>
        {comments.map((comment, key) => (
          <div className="content" key={key}>
            <h4 class="author">{comment.username}</h4>
            <div className="text">
              {comment.text}
            </div>
          </div>
        ))}
      </div>
  </>
);

export default CommentsList;