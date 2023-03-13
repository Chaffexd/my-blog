import React from 'react';

import classes from './Form.module.css';

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;

const Form = () => {
  return (
    <form className={classes.formContainer}>
        <div>
            <label htmlFor="date">{currentDate}</label>
            <input type="text" id="date" className={classes.dateForm} />
        </div>
        <div>
            <label htmlFor="opening-text"></label>
            <textarea 
                rows="4" 
                cols="60" 
                id="opening-text" 
                className={classes.formText} 
                placeholder="What do you want to share?">
            </textarea>
        </div>
        <button className={classes.button}>Post</button>
    </form>
  );
};

export default Form;