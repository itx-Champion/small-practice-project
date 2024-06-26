import React, { useState, useEffect } from 'react';
import './TodoList.css';
import Clock from '../Clock/Clock';

const TodoList = () => {
    // keyboard event
    const [keyInfo, setKeyInfo] = useState({
        keyPressed: '',
        keyCode: '',
        charCode: '',
        eventType: ''
      });
    // keyboard event end
  // State variables
  const [inputValue, setInputValue] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('myData'));
    if (savedTodos) {
      setTodoArray(savedTodos);
    }
  }, []);
//   keyboard event
const handleKeyDown = (event) => {
    setKeyInfo({
      keyPressed: event.key,
      keyCode: event.code,
      charCode: event.key.charCodeAt(0),
      eventType: event.type
    });
  };
// end keyboard event

  // Add todo
  const AddToDo = (e) => {
    e.preventDefault();
    const withoutSpace = inputValue.trim();
    if (withoutSpace !== '' && !todoArray.includes(withoutSpace)) {
      const newTodoArray = [...todoArray, withoutSpace];
      setTodoArray(newTodoArray);
      localStorage.setItem('myData', JSON.stringify(newTodoArray));
      setInputValue('');
    }
  };

  // Remove todo
  const removeToDo = (todoToRemove) => {
    const updatedTodoArray = todoArray.filter(todo => todo !== todoToRemove);
    setTodoArray(updatedTodoArray);
    localStorage.setItem('myData', JSON.stringify(updatedTodoArray));
  };

  return (
    <div className='merge-body'>
    <section className='todo-section'>
    <div className='todo-body'>
<p className='project-name'>Todo List</p>
      <form onSubmit={AddToDo}>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="btn">Add Todo</button>
        </div>
      </form>
      
      <section className="todo-list">
        {todoArray.map((todo, index) => (
          <div key={index} className="main-todo">
            <li>{todo}</li>
            <button className="dltBtn" onClick={() => removeToDo(todo)}>Delete</button>
          </div>
        ))}
        </section>
    </div>
      </section>
      <Clock/>
      <section className='Keyboard-section'>
<div className="keyboard-body">
<p className='project-name'>for keyboard event</p>
      <div>
        <input
          type="text"
          placeholder="type something..."
          onKeyDown={handleKeyDown}
        />
        <div className="output">
          <p className="keyPressed">Key Pressed: {keyInfo.keyPressed}</p>
          <p className="KeyCode">Key Code: {keyInfo.keyCode}</p>
          <p className="CharCode">Char Code: {keyInfo.charCode}</p>
          <p className="eventType">Event Type: {keyInfo.eventType}</p>
        </div>
      </div>
</div>
      </section>
    </div>
  );
}

export default TodoList;
