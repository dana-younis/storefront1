import React from "react";
import { remove } from "../store/actions";
import { useSelector, useDispatch } from 'react-redux';


export default function SimpleCart() {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  if (!cartItems.length) return null;
  return (
    <div className="simpleCart">
      {cartItems.map((item, idx) => (
        <div key={idx} className="simpleCartItem">
          <p className="simpleCartItemName">
            {item.name} ({item.count})
          </p>
          <p onClick={() => dispatch(remove(item))} className="simpleCartDeleteItem">x</p>
        </div>
      ))}
    </div>
  );
}