import './App.css';
import React, { useState } from 'react';
import ToDoRow from './Compoment/ToDoRow';
import Button from './Compoment/Button';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

 
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id!== id));
  };

  
  const onAdd = () =>{
    setTodos([...todos, { id: Date.now(), text: inputValue, checked: false }]);
    setInputValue('');
  }

  return (
    <div className='main'>
      <div className="App">
      <div className="todo-list">
        <h3>Todo</h3>
        {todos.map(todo => (
          <ToDoRow key={todo.id} todo={todo} onDelete={deleteTodo}/>
        ))}
      </div>
      <hr/>
      <div className='input-part'>
        <input type='text' value={inputValue} placeholder="    Add task here..." onChange={(e) => setInputValue(e.target.value)} style={{marginRight : 10, height:49, width:370, borderRadius: 5, border:'none', outline:'none', fontSize:20}} />
        <Button btnType="big" onClick={() => onAdd()}>ADD</Button>
      </div>
    </div>
    </div>
  );
}

export default App;