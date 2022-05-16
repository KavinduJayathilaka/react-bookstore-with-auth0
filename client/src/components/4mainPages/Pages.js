import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import NotFound from "./utils/not_found/NotFound";
import DetailProduct from "./detailProduct/DetailProduct";
function Pages() {
  return (
    <Switch>
      <Route path="/cart" exact component={Cart} />
      <Route path="/detail/:id" exact component={DetailProduct} />
    </Switch>
  );
}

export default Pages;
