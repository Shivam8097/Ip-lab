// Hooks:

import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `The count is ${count}`

    if (count === 5) {
      alert('Count has reached 5!');
    }
  }, [count]); 

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Demonstration of React Hooks</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Click the button to increment the counter
        </p>
      </div>
    </>
  );
}

export default App;

// useContext:
import React, { useContext, createContext } from 'react';

// Create a Context
const ThemeContext = createContext('light');

function ThemedComponent() {
    const theme = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#000' }}>
            <h1>{theme} theme</h1>
        </div>
    );
}

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ThemedComponent />
        </ThemeContext.Provider>
    );
}

export default App;
