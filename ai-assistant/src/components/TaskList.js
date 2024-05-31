import React, { useState } from 'react';

function TaskList({ tasks }) {
  // If using state management, remove the tasks prop and access tasks from state

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      // Add new task to tasks list (logic depends on state management)
      setNewTask('');
    }
  };

  const handleTaskComplete = (taskId) => {
    // Update task completion status (logic depends on state management)
  };

  const handleTaskDelete = (taskId) => {
    // Delete task from tasks list (logic depends on state management)
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskComplete(task.id)}
            />
            {task.text}
            <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskList;
