import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
