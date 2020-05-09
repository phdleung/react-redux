import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');
  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'POST',
      body: JSON.stringify({
        username, text: commentText
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const body = await result.json();
    setArticleInfo(body);

    setUsername('');
    setCommentText('');
  }
  return (
    <div id="add-comment-form" className="ui form segment">
      <h3>Add a comment</h3>
      <div className="field">
        <label>
          Name:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
        </label>
      </div>
      <div className="field">
        <label>
          Comment:
        <textarea rows="4" cols="50" value={commentText} onChange={event => setCommentText(event.target.value)} />
        </label>
      </div>
      <button onClick={() => addComment()}>Add comment</button>
    </div>
  );
}

export default AddCommentForm;