import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, Sort, PizzaBlock } from "../components";
import { fetchPizzas } from "../redux/actions/pizzas";
import { setSortBy } from "../redux/actions/filters";
import { addPizzaToCart } from "../redux/actions/cart";
import NewLoader from "../components/loader/NewLoader";

const sortItems = [
  { name: "популярности", type: "rating", order: 'desc' },
  { name: "цене", type: "price", order: 'asc' },
  { name: "алфавиту", type: "name", order: 'asc' },
]

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems =  useSelector(({ cart }) => cart.items)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);
  
  const onClickSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  }

  return (
    <div>
      <div className="categories_wrapper">
        <Categories activeCategory={category} />
        <Sort
          activeSortType={sortBy.type} sortItems={sortItems} onClickSortType={onClickSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content_items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} onClickAddPizza={handleAddPizzaToCart} addedCount={cartItems[obj.id] && cartItems[obj.id].length}/>)
          : Array(10)
              .fill()
              .map(() => <NewLoader key={Math.random()} />)}
      </div>
    </div>
  );
}

export default Home;
