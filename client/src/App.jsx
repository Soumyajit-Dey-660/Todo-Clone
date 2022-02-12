import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import TasksContainer from './components/TasksContainer/TasksContainer';

const App = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="main-container">
                <Header />
                <TasksContainer />
            </div>
        </div>
    );
};

export default App;
