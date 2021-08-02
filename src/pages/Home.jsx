import React from 'react'
import axios from 'axios';
import { Categories, Sort, PizzaBlock } from '../components';

function Home() {
    const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);
    return (
        <div>
             <div className="categories_wrapper">
            <Categories />
            <Sort sortItems ={[
              {name: 'популярности', type: 'popular'},
              {name: 'цене', type: 'price'},
              {name: 'алфавиту', type: 'alphabet'}]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content_items">
            {pizzas.map((items) => (
              <PizzaBlock key={items.id} items={items} />
            ))}
          </div>
        </div>
    )
}

export default Home
