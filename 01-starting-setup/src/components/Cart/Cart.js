import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
const Cart = props =>{
    const cartItems = <ul className={classes['cart-items']}>{
        [{
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99
        }].map(x => <li>{x.name}</li>)}</ul>;
    return(
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={classes['button']}>Order</button>
            </div>
        </Modal>
    );
}
export default Cart;