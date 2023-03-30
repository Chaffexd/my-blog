import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import classes from './Todo.module.css';

const Todo = () => {
    const [input, setInput] = useState("");
    const [toDoList, setToDoList] = useState([]);

    const { theme } = useContext(ThemeContext);
    const colorScheme = theme === 'light' ? classes.containerLight : classes.containerDark;

    const addItem = () => {
        // some validation, if filed is empty throw alert
        if(!input) {
            alert("Enter a task");
            return;
        }

        // this is for mapping it later
        const item = {
            id: Math.floor(Math.random() * 50),
            value: input
        };
        // we have to take a previous snapshot and update it via function for reliable updates
        setToDoList(prevList => [...prevList, item]);

        // after setting task, reset string field
        setInput("");
        console.log(toDoList);
    };

    const deleteItem = (id) => {
        console.log(id);
        // filter removes id if they do not match based on item.id and id
        const newItems = toDoList.filter(item => item.id !== id);
        // we then set a new array based on the item removed
        setToDoList(newItems);
    };

    return (
        <div className={`${classes.toDoForm} ${colorScheme}`}>
            <div className={classes.todoTop}>
                <h1>To do:</h1>
                <label htmlFor="to-do-input" />
                <input 
                    className={classes.toDoInput}
                    type="text"
                    id="to-do-input"
                    name="text"
                    autoComplete="off"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                    <button className={classes.button} onClick={addItem}>Add</button>
            </div>
                <ul>
            {toDoList.map((item) => {
                return (
                <div className={classes.toDoItems} key={item.id}>
                    <li 
                        className={classes.li}
                        >{item.value}
                    </li>
                        <button className={classes.deleteIcon} onClick={() => deleteItem(item.id)}>🗑
                        </button>
                </div>
            )
        })}
        </ul>
        </div>
    );
};

export default Todo;