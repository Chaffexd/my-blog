import React, { useState } from 'react';

import classes from './Todo.module.css';

const Todo = () => {
    const [input, setInput] = useState("");
    const [toDoList, setToDoList] = useState([]);

    const addItem = () => {
        if(!input) {
            alert("Enter a task");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 50),
            value: input
        };

        setToDoList(prevList => [...prevList, item]);

        setInput("");
        console.log(toDoList)
    };

    const deleteItem = (id) => {
        console.log(id);
        const newItems = toDoList.filter(item => item.id !== id);
        setToDoList(newItems)
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