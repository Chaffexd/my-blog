import React from 'react';
import Form from './Form';

import classes from './PostForm.module.css';

const Post = (props) => {
  return (
    <div className={classes.mainPost}>
      <Form onAddPost={props.onAddPost} />
    </div>
  );
};

export default Post;