import React from 'react';

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'POST'
    });
    const body = await result.json();
    setArticleInfo(body);
  }
  
  return (
    <div id="upvotes-section" className="ui labeled button">
      <button className="ui red button" onClick={upvoteArticle}>
        <i className="heart icon"></i> Like
        </button>
      <span className="ui basic red left pointint label">{upvotes}</span>
      {/* <p>This post has been upvoted {upvotes} times</p> */}
    </div>
  );
};

export default UpvoteSection;