import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { posts , setPosts } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={props.username}
        thumbnailUrl={props.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection posts = {() => setPosts(posts.id)} setPosts = {setPosts}/>
      {/* Comments also wants its props! */}
      <Comments posts = {posts} setPosts = {setPosts}/>
    </div>
  );
};

export default Post;
