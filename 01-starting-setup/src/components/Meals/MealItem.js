import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import cartContext from '../../store/cart-context';
const MealItem = (props) =>{
    const price = `$${props.price}`;
    const context = useContext(cartContext)
    const addToCartHandler = count =>{
        context.addItem({
            id : props.id,
            name : props.name,
            count : count,
            price : props.price
        })
    }
    return(
        <li className={classes.meal}>
            <div>
                <div><h3>{props.name}</h3></div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart = {addToCartHandler}/>
            </div>
            
        </li>
    )
}
export default MealItem;