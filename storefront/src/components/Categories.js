import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Link';
import { changeActive } from '../store/categories';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRemoteData } from './thunk';
import { makeStyles } from '@material-ui/core/styles';
function Categories() {
  const useStyles = makeStyles({
    buttonBar: {
      backgroundColor: '#fad2e1',
      borderWidth: 4,
      borderColor: '#cb997e',
      borderStyle: 'solid',
    },
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getRemoteData()).then(() => {
      dispatch(changeActive('food'));
    });
  }, []);

  return (
    <>
      <Breadcrumbs
       
        style={{ marginLeft: '2%', fontSize: '25px', marginTop: '1%' }}
      >
        {state.categories.map((element, idx) => {
          return (
            <Button
              className={classes.buttonBar}
              key={idx}
              onClick={() => {
                dispatch(changeActive(element.name));
              }}
            >
              {element.displayName}
            </Button>
          );
        })}
      </Breadcrumbs>
      <div style={{ marginLeft: '4%', fontSize: '35px', marginTop: '2%' }}>
        {state.activeCategory.displayName}
      </div>
      <div
       
      >
        {state.activeCategory.description}
      </div>
    </>
  );
}

export default Categories;
