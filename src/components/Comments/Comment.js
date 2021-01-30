// You do not need to change this file.
import React from 'react';

const Comment = props => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { posts, setPosts } = props;

  return (
    <div className='comment-text'>
      <span className='user'>{props.username}</span>
      {' '}
      <span className='comment'>{props.text}</span>
    </div>
  );
};


export default Comment;
