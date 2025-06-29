import React from 'react';
import GoalSetter from './components/GoalSetter';
import Tracker from './components/Tracker';
import Graph from './components/Graph';

function App() {
  return (
    <div style={{ padding: 10 }}>
      <h2>🎯 Productivity Tracker</h2>
      <GoalSetter />
      <hr />
      <Tracker />
      <hr />
      <Graph />
    </div>
  );
}

export default App;
