import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Home, EmptyCart } from "./pages";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route
            path="/"
            component={Home}
            exact
          />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
