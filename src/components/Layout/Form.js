import React, { useRef, useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import classes from './Form.module.css';

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}/${month}/${year}`;

const Form = (props) => {
    const dateRef = useRef("");
    const titleRef = useRef("");
    const textRef = useRef("");
    const [disabled, setDisabled] = useState(true);
    const { theme } = useContext(ThemeContext);
    const colorScheme = theme === 'light' ? classes.containerLight : classes.containerDark;


    const addPost = (e) => {
        // stop the form reloading
        e.preventDefault();

        // our object containing post info
        const post = {
            date: currentDate,
            title: titleRef.current.value,
            text: textRef.current.value
        };

        props.onAddPost(post);
        // clears the form after post submission
        // this is not good practice as it diectly manipulates the dom
        dateRef.current.value = "";
        titleRef.current.value = "";
        textRef.current.value = "";
    };

    function handleButton() {
        if(titleRef.current.value.length < 5 && textRef.current.value === "") {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }
    
    return (
        <form className={`${classes.formContainer} ${colorScheme}`} onSubmit={addPost} >
            <div>
                <label htmlFor="date">{currentDate}</label>
                <input type="text" id="date" className={classes.dateForm} ref={dateRef} />
            </div>
            <div>
                <label htmlFor="title-text"></label>
                <textarea 
                    rows="1" 
                    cols="60" 
                    id="title-text" 
                    className={classes.formTitle} 
                    placeholder="Title"
                    ref={titleRef}
                    onChange={handleButton}>
                </textarea>
            </div>
            <div>
                <label htmlFor="opening-text"></label>
                <textarea 
                    rows="4" 
                    cols="60" 
                    id="opening-text" 
                    className={classes.formText} 
                    placeholder="What do you want to share?"
                    ref={textRef}
                    onChange={handleButton}>
                </textarea>
            </div>
            { props.loading ? 
                <span 
                    className={`${props.loading === true ? classes.loader : ""}`}>
                </span>
                    :
                <button 
                className={classes.button} 
                disabled={disabled}>
                    {props.loading ? "" : "Post"}
                </button> 
            }
        </form>
    );
};

export default Form;