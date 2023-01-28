import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Cart.css";
import { toast } from "react-toastify";

const Cart = () => {
  const data = useSelector((state) => state);
  const dataLength = data.length;

  const [quantity, setQuantity] = useState();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const handleSubTotal = () => {
    var t = 0;
    if (dataLength >= 0) {
      for (var i = 0; i < dataLength; i++) {
        t = t + parseInt(data[i].price*data[i].qnty);
      }
    }
    setSubTotal(t);
  };



  useEffect(() => {
    handleSubTotal();
  }, [data, quantity]);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toast.error("Product Remove from Cart ! ")
  };

  const handledecr = (el) => {
    if (el.qnty > 1) {
      setQuantity(el.qnty -= 1);
    }
  };

  const handleincr = (e) => {
    setQuantity(e.qnty += 1);
  };

  return (
    <>
      {dataLength === 0 ? (
        <h1>Your Cart Is Empty !</h1>
      ) : (
        <div className="cart">
          <h1>Cart</h1>
          <div className="cart_Items">
            <h2>
              SubTotal : <span>Rs. {subTotal}</span>
            </h2>
            {data.map((item) => (
              <div key={item.id} className="cart_Item">
                <div className="cart_image">
                  <img src={item.imgdata} />
                </div>
                <div className="cart_details">
                  <h3>
                    Dish Name: <span>{item.rname}</span>
                  </h3>
                  <h3>
                    Price: <span>{item.price}</span>
                  </h3>
                  <h4>total: Rs.{item.price*item.qnty} </h4>
                  <div className="product_Count">
                    <button onClick={() => handledecr(item)}>-</button>
                    <p>{item.qnty}</p>
                    <button onClick={() => handleincr(item)}>+</button>
                  </div>
                  <button
                    className="removeBTN"
                    onClick={() => handleRemove(item.id)}
                  >
                    <DeleteIcon />
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="order">Place Order</button>
        </div>
      )}
    </>
  );
};

export default Cart;
