import React, { useState, useEffect } from 'react';


import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  useEffect(() => {
    document.title = isOn ? 'ON' : 'OFF'
  });
  
  return (
    <div>
      <p>{isOn ? 'Yes, it is on!' : 'Off'}</p>
        <p>Times Clicked: {clickCount}</p>
      <button onClick={()=> {
        setIsOn(!isOn);
        setClickCount(clickCount +1)}
      }>Switch</button>
    </div>
  );
}

export default App;
