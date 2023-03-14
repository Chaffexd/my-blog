import React, { useRef, useState } from 'react';

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

    const addPost = (e) => {
        // stop the form reloading
        e.preventDefault();

        // add post validation


        // our object containing post info
        const post = {
            date: currentDate,
            title: titleRef.current.value,
            text: textRef.current.value
        };

        props.onAddPost(post);
        // clears the form after post submission
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
        <form className={classes.formContainer} onSubmit={addPost} >
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
            <button className={classes.button} disabled={disabled}>{props.loading ? "Loading..." : "Post"}</button>
        </form>
    );
};

export default Form;