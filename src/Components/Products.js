import React, { useState } from "react";
import "./Products.css";
import Product from "../Data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const handleAdd = (e) => {
    dispatch({ type: "ADD_TO_CART", payload: e });
    toast.success("Product Added In Cart Successfully !")
  };

  return (
    <div>
      <h1>Add To Cart</h1>
      <div className="products">
        {Product.map((item) => (
          <div className="product_item" key={item.id}>
            <img src={item.imgdata} alt="image" className="product_item_img" />
            <h2>{item.rname}</h2>
            <h4>Price: Rs.{item.price}</h4>
            <button onClick={() => handleAdd(item)} className="addBTN">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
