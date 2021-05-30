import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
const HeaderCartButton = (props) =>{
    const cartContext = useContext(CartContext);
    const numberOfItems = cartContext.items.reduce((currentCount, item) =>{
        return currentCount + item.count
    }, 0);
    return(
        <button className={classes.button} onClick = {props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
}
export default HeaderCartButton;