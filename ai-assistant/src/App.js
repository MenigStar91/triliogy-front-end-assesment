import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Chat from './components/Chat';
import TaskList from './components/TaskList';
import CalendarView from './components/CalendarView'; // Placeholder for future implementation
import InformationPanel from './components/InformationPanel'; // Placeholder for future implementation
import RecommendationCard from './components/RecommendationCard';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [tasks, setTasks] = useState([]); // State for tasks

  // Sample data for recommendations (replace with actual recommendations logic)
  const recommendations = [
    { text: "Check out the weather forecast for the weekend!", link: "https://www.example.com/weather" },
    { text: "Read the latest news headlines.", link: "https://www.example.com/news" },
  ];

  // Simulate fetching tasks from an API (replace with actual API call)
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data.tasks);
    };
    fetchTasks();
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter' && userInput.trim() !== '') {
      // Send user input to NLP API and update state with response
      // (Replace with actual API call)
      setAiResponse('Processing...'); // Placeholder response
      setUserInput('');
    }
  };

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: Math.random().toString(), text, completed: false }]);
  };

  const handleTaskComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <Navigation />
      <div className="main-content">
        <Chat
          userInput={userInput}
          onInputChange={handleInputChange}
          onEnterPress={handleEnterPress}
          aiResponse={aiResponse}
        />
        <TaskList tasks={tasks} onAddTask={handleAddTask} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete} />
        <CalendarView appointments={[]} /> {/* Placeholder for future implementation */}
        <InformationPanel /> {/* Placeholder for future implementation */}
        {recommendations.length > 0 && <RecommendationCard recommendation={recommendations[0]} />}
      </div>
    </div>
  );
}

export default App;
