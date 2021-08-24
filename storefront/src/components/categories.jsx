import React from 'react';
import { connect } from 'react-redux';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../store/product';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { activeCategory } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  buttonBar: {
    backgroundColor: '#fad2e1',
    borderWidth: 2,
    borderColor: '#cb997e',
    borderStyle: 'solid',
  margin:'44px',
  
  },
}));

function Categories(props) {
  const classes = useStyles();
  function changeCategory(category) {
    // props.filterProducts(category);
    // props.activeCategory(category);
    props.activeCategory(category);
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(activeCategory('ALL'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <h2> Our Categories</h2>
      <div className={classes.root}>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button className={classes.buttonBar}  onClick={() => changeCategory('FOOD')}>FOOD</Button>
          <Button className={classes.buttonBar} onClick={() => changeCategory('CARS')}>CARS</Button>
          <Button className={classes.buttonBar} onClick={() => changeCategory('ELECTRONICS')}>
            ELECTRONICS
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productsReducer,
  category: state.categoriesReducer,
});
const mapDispatchToProps = { activeCategory};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);