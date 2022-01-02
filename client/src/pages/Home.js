import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
// import store from "../utils/GlobalState";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
