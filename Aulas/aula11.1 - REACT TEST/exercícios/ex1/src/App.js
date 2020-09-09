import React from 'react';
import './App.css';

const taskList = ['Learn React', 'Give everything to my dev studies', 'Get a $3.500 job'];

const task = (value) => {
  return (
    <div>
      <ul>{value}
        {taskList.map(task => <li> { task } </li>)}
      </ul>
    </div>
  );
}

function App() {
  return task('My tasks:')
}

export default App;
