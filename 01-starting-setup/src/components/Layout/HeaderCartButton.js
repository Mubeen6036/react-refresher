import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';
const HeaderCartButton = (props) =>{
    const cartContext = useContext(CartContext);
    const numberOfItems = cartContext.items.reduce((currentCount, item) =>{
        return currentCount + item.count
    }, 0);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const btnClasses = `${classes.button} ${btnIsHighlighted?classes.bump:''}`;
    useEffect(()=>{
        if(cartContext.items.length > 0){
            setBtnIsHighlighted(true);
            const timer = setTimeout(()=>{
                setBtnIsHighlighted(false);
            }, 350);
            return ()=>{
                clearTimeout(timer);
            };
        }

    }, [cartContext.items]);

    return(
        <button className={btnClasses} onClick = {props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
}
export default HeaderCartButton;