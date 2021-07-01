import React from 'react';
import './App.css';
import axios from 'axios';
import { Categories, Header, Sort, PizzaBlock } from './components';

function App() {
  const [pizzas, setPizzas] = React.useState([])
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })
  },[])
  
  

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="categories_wrapper">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content_items">
           {  pizzas.map(items => <PizzaBlock items={items}/>)
           }
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
