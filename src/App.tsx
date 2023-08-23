import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppRoutes from './routes/routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AppRoutes/>
      </header>
    </div>
  );
}

export default App;
