import { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import cardContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart = props =>{
    const context = useContext(cardContext);
    const totalAmont  = `$${context.totalAmount.toFixed(2)}`;
    const hasItems  = context.items.length > 0;

    const cartItemRemoveHandler = (id) =>{
        context.removeItem(id);
    }

    const cartItemAddHandler = (item) =>{
        context.addItem({...item, count : 1})
    }

    const cartItems = 
    <ul className={classes['cart-items']}>{
        context.items.map(item => 
            <CartItem 
            key = {item.id} 
            name = {item.name} 
            price = {item.price} 
            count = {item.count}
            onRemove = {cartItemRemoveHandler.bind(null, item.id)} 
            onAdd = {cartItemAddHandler.bind(null, item)}/>
        )}
    </ul>;
    return(
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmont}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes['button']}>Order</button>}
            </div>
        </Modal>
    );
}
export default Cart;