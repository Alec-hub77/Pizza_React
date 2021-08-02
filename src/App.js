import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Cart } from './pages';



function App() {

  // React.useEffect(() => {
  //   axios.get('http://localhost:3000/db.json').then(({data}) => {
  //     setPizzas(data.pizzas)
  //   })
  // }, [])

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
