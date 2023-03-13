import React from 'react';

import classes from './Post.module.css';

const Post = (props) => {
  return (
    <li className={classes.li}>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.blogText}</p>
    </li>
  );
};

export default Post;