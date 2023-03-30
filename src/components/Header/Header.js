import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import classes from './Header.module.css';

const Header = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const navBarTheme = theme === 'light' ? classes.containerLight : classes.containerDark;

  return (
    <div className={`${classes.navBar} ${navBarTheme}` }>
        <div>
          <button onClick={toggle}>Toggle Theme</button>
        </div>
    </div>
  );
};

export default Header;