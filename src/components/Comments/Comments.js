import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { posts , setPosts } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {posts.map((comment) => {
        return(
          <Comment posts = {posts} setPosts = {setPosts} />
        )
      })}
    </div>
  );
};

export default Comments;
