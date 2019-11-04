import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

import Header from './components/header/index';

const App = () => (
  <Router>
    <div className="main-container">
      <nav>
        <Header />
      </nav>
      <main>
        <Route path="/" />
      </main>
      <footer />
    </div>
  </Router>
);

export default App;
