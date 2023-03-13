import React from 'react';
import Form from './Form';

import classes from './PostForm.module.css';

const Post = () => {
  return (
    <div className={classes.mainPost}>
      <Form />
    </div>
  );
};

export default Post;