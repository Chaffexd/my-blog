import React from 'react';

import classes from './Post.module.css';

const Post = (props) => {
  return (
    <li className={classes.li}>
        <span className={classes.retrievedPost}>
            <h2 className={classes.title}>{props.title}</h2>
            <p>{props.date}</p>
        </span>
        <p>{props.blogText}</p>
    </li>
  );
};

export default Post;