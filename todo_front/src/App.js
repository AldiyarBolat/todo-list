import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;


