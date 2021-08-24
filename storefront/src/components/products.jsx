import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addToCart } from "../store/actions";
import { useDispatch } from "react-redux"
function Products(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    card: {
      display: 'inline-block',
      width: 250,
      height: 560,
      padding: 20,
      margin: 27,
      borderWidth: 7,
      borderColor: '#cb997e',
      borderStyle: 'solid',
    },
    buttonBar: {
      backgroundColor: '#fad2e1',
      borderWidth: 2,
      borderColor: '#cb997e',
      borderStyle: 'solid',
    },
  });

  const classes = useStyles();

  return (
    <div>
      <div>
        <h2>{props.category.activeCategory.displayName}</h2>
        <p>{props.category.activeCategory.description}</p>
      </div>

      <div>
        {props.productList.products.map((product, idx) => (
          <Card  className={classes.card}>
            <CardActionArea key={idx}>
              <CardMedia
               
                component="img"
              
                height="200"
                image={product.imgUrl}
               
              />
              <CardContent>
             
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h4"
                >
                  Category: {props.category.activeCategory.displayName}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  Price: {product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  inventory: {product.inventory}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            {product.inventory?( <Button size="small" color="primary"  onClick={() =>props.addToCart(product) }>
        ADD TO CART
        </Button>):(<p>OUT OF STOCK</p>)}
       
              <Button className={classes.buttonBar}  size="small" color="primary">
                VIEW DETAILS
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  productList: state.productsReducer,
  category: state.categoriesReducer
});


const mapDispatchToProps = { addToCart };
export default connect( mapStateToProps,mapDispatchToProps)(Products);