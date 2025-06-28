// src/TodoList.jsx
import React, { useState, useEffect } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("zenfocus_tasks");
        return saved ? JSON.parse(saved) : [];
        });
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() === '') return;
        setTasks([...tasks, input]);
        setInput('');
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    useEffect(() => {
        localStorage.setItem("zenfocus_tasks", JSON.stringify(tasks));
    }, [tasks]);


  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button className="remove-btn" onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <button onClick={() => setTasks([])} style={{ marginTop: '1rem' }}>
            Clear All Tasks
        </button>
        )}
    </div>
  );
}

export default TodoList;
