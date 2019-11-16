import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './pages/Home/index';
import CreateAccount from './pages/CreateAccount/index';
import Login from './pages/Login/index';
import Catalog from './pages/Catalog/index';

const App = () => (
  <Router>
    <div className="main-container">
      <nav>
        <Header />
      </nav>
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/create-account" exact component={CreateAccount} />
        <Route path="/login" exact component={Login} />
        <Route path="/catalog" exact component={Catalog} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </Router>
);

export default App;
