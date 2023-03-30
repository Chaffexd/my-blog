import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import classes from './Post.module.css';

const Post = (props) => {
  const { theme } = useContext(ThemeContext);
  const navBarTheme = theme === 'light' ? classes.containerLight : classes.containerDark;

  return (
    <li className={`${classes.li} ${navBarTheme}`}>
        <span className={classes.retrievedPost}>
            <h2 className={`${classes.title} ${theme}`}>{props.title}</h2>
            <p>{props.date}</p>
        </span>
        <p>{props.blogText}</p>
    </li>
  );
};

export default Post;