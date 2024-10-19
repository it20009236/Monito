import React from "react";
import ProductList from "../ProductDeatail/Product";
import Cardlist from "../ProductDeatail/Cardlist";
import PuppyList from "../ProductDeatail/PupplyList";
import Header from "../NavBar/NavBar";

const ProductDeatail = () => {
  return (
    <div>
      <div className="hidden md:block"><Header/></div>
      <ProductList />
      <Cardlist />
      <PuppyList />
    </div>
  );
};

export default ProductDeatail;
