import React, { useState } from 'react';

import classes from './Todo.module.css';

const Todo = () => {
    const [input, setInput] = useState("");
    const [toDoList, setToDoList] = useState([]);

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
        <div className={classes.toDoForm}>
            <h1>To do:</h1>
            <input 
                type="text"
                id="to-do-input"
                name="text"
                autoComplete="off"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
                <button onClick={addItem}>Add</button>
                <ul>
            {toDoList.map(item => {
                return (
                <li key={item.id}>{item.value}
                    <button onClick={() => deleteItem(item.id)}>🗑
                    </button>
                </li>
            )
        })}
        </ul>
        </div>
    );
};

export default Todo;