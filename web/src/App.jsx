import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';

import Header from './components/Header/index';
import Home from './pages/Home/index';
import Footer from './components/Footer/index';

const App = () => (
  <Router>
    <div className="main-container">
      <nav>
        <Header />
      </nav>
      <main>
        <Route path="/" exact component={Home} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </Router>
);

export default App;
