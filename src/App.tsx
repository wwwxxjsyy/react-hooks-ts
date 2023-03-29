import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { RouteConfig } from './router/index'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <section>
        <RouteConfig></RouteConfig>
      </section>
    </div>
  );
}

export default App;