import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getCategoryItems } from '../store/products';
import { addToCart } from '../store/cart';
import { reduceInventory } from '../store/products';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 140,
  },
  buttonBar: {
    backgroundColor: '#fad2e1',
    borderWidth: 2,
    borderColor: '#cb997e',
    borderStyle: 'solid',
  },
});

function Products(props) {
  const classes = useStyles();

  function handleClick(element) {
    props.addToCart(element);
    props.reduceInventory(element);
    props.getCategoryItems(props.category.name);
  }

  return (
    <>
      {props.products.activeProducts.map((element, idx) => {
        return (
          <Card
            className={classes.root}
            key={idx}
            style={{
              display: 'inline-block',
              width: 250,
              height: 370,
              padding: 20,
              margin: 27,
              borderWidth: 7,
              borderColor: '#cb997e',
              borderStyle: 'solid',
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`https://source.unsplash.com/random?${element.name}`}
                title={element.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {element.name} - ${element.price}
                </Typography>
                <Typography variant="body2" component="p">
                  price: {element.price}
                </Typography>
                <Typography variant="body2" component="p">
                  Quantity: {element.inStock}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.buttonBar}
                size="small"
                color="#cb997e"
                onClick={() => {
                  handleClick(element);
                }}
                style={{ marginLeft: '20%' }}
              >
                Add To Cart
              </Button>
              <Button
                onClick={() => {}}
                className={classes.buttonBar}
                size="small"
         
              >
                VIEW DETAILS
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
function mapStateToProps(state) {
  return {
    category: state.categories.activeCategory,
    products: state.products,
    cartProducts: state.cart,
  };
}
const mapDispatchToProps = {
  getCategoryItems,
  addToCart,
  reduceInventory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
