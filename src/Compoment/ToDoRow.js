import React, { useState } from 'react';
import Button from './Button';
import Checked from './Checked';
import './ToDoRow.css';

function ToDoRow({ todo, onDelete,}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="todo-row"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Checked label={todo.text}/>
            {hovered && <Button btnType="small" onClick={() => onDelete(todo.id)}>Delete</Button>}
        </div>
    );
}

export default ToDoRow;