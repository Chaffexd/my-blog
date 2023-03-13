import React from 'react';
import Post from './Post';

const PostList = (props) => {
  return (
    <ul>
        {props.posts.map((post) => (
            <Post 
            key={post.id}
            title={post.title}
            date={post.date}
            blogText={post.blogText}
            />
        ))}
    </ul>
  );
};

export default PostList;