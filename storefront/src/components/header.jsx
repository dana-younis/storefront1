import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
            MY STORE
          </Typography>
          <Button >CART(0)</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
