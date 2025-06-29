/* global chrome */

import React, { useState } from 'react';

function GoalSetter() {
  const [goal, setGoal] = useState('');

  const saveGoal = () => {
    chrome.storage.local.set({ dailyGoal: goal });
    alert('Goal saved!');
  };

  return (
    <div>
      <h3>🎯 Daily Goal</h3>
      <input
        type="text"
        placeholder="Study React 2 hours"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button onClick={saveGoal}>Save</button>
    </div>
  );
}

export default GoalSetter;
