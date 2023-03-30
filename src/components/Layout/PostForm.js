import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Form from './Form';

import classes from './PostForm.module.css';

const Post = (props) => {
  const { theme } = useContext(ThemeContext);
  const colorScheme = theme === 'light' ? classes.containerLight : classes.containerDark;
   
  return (
    <div className={`${classes.mainPost} ${colorScheme}`}>
      <Form onAddPost={props.onAddPost} loading={props.loading} />
    </div>
  );
};

export default Post;