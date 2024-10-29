// src/app/todo/page.js
"use client";

import { useState } from 'react';

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-6 text-center text-lime-200" >
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          className="w-3/4 p-2 border border-gray-300 rounded mr-2 focus:outline-none focus:ring focus:ring-blue-200 text-cyan-900"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded shadow-md text-gray-900"
          >
            <span>{t.text}</span>
            <button
              onClick={() => deleteTask(t.id)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
