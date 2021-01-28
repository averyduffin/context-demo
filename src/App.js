import React from 'react';
import { Counter } from './components/Counter/Counter';
import { CounterWithContext } from './components/CounterWithContext/CounterWithContext'
import './App.css';
import { ContextProvider } from './context/CounterContext';

function App() {
  return (
    <div className="App">
      <h4>Using Redux</h4>
      <Counter />
      <h4>Using Context Api</h4>
      <ContextProvider><CounterWithContext /></ContextProvider>
    </div>
  );
}

export default App;
