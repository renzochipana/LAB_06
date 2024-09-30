import React, { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput) {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };

    return (
        <div className="App">
            <h1>Lista de Tareas</h1>
            <input 
                type="text" 
                value={taskInput} 
                onChange={(e) => setTaskInput(e.target.value)} 
                placeholder="Agregar nueva tarea"
            />
            <button onClick={addTask}>Agregar</button>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;