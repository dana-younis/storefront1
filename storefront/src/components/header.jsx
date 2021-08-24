import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Cart from './cart';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    background: 'linear-gradient(40deg, #cb997e 40%, #e5989b 80%)',
    height: 100,

    borderColor: 'black',
    borderStyle: 'solid',
  },

  title: {
    color: 'black',
  },
}));

function Header(props) {
  const cartItemsCount = useSelector((state) => state.cartReducer.length);
  const classes = useStyles();
  console.log(props, 'propssssssss');
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
            MY STORE
          </Typography>
          <Button color="grey">
            Cart ({cartItemsCount})
            <Cart />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => ({
  UserCart: state.cartReducer,
});

export default connect(mapStateToProps)(Header);
