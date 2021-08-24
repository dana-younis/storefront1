import { connect } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { remove } from "../store/cart";
import { useSelector, useDispatch } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  
}));

function Cart(props) {
  const dispatch = useDispatch();

  const classes = useStyles();

  function handleList() {

    let temp = [];

    props.cart.map((element) => {
      if (temp.includes(element)) {
        temp.forEach(item => {
          if (item.name === element.name) {
            item.inCart += 1;
          }
        })
      } else {
        element.inCart = 1;
        temp.push(element)
      }
    })

    let list = temp.map((element, idx) => {
      return (<>
        <ListItem key={idx}  >
        {/* <p  className={classes.buttonBar} onClick={() => dispatch(remove(element))} >x</p> */}
          <ListItemText primary={`${element.name} - Quantity: ${element.inCart}`}  />
        </ListItem>
        <hr></hr>
       
      </>
      )
    })
    return list;
  }
  return (
    
    <div className={classes.root}>
      <List  >
        {handleList()}
      </List>

     
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Cart);



