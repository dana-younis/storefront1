import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'black',
  },
  buttonBar: {
    backgroundColor: '#fad2e1',
    borderWidth: 2,
    borderColor: '#cb997e',
    borderStyle: 'solid',
    margin: '400px',
  },
  bar: {
    background: 'linear-gradient(40deg, #cb997e 40%, #e5989b 80%)',
    height: 100,

    borderColor: 'black',
    borderStyle: 'solid',
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
            MY STORE
          </Typography>
          <IconButton
            className={classes.buttonBar}
            onClick={() => {
              props.show();
            }}
          >
            <StyledBadge badgeContent={props.cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Header);
