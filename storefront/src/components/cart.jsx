import React from "react";
import { remove } from "../store/cart";
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonBar: {
    backgroundColor: '#fad2e1',
   
    borderColor: '#cb997e',
    borderStyle: 'solid',

  
  },
}));
export default function SimpleCart() {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  if (!cartItems.length) return null;
  return (
    <div >
      {cartItems.map((item, idx) => (
        <div key={idx}>
          <p>
            {item.name} ({item.count})
          </p>
          <p  className={classes.buttonBar} onClick={() => dispatch(remove(item))} >remove</p>
        </div>
      ))}
    </div>
  );
}