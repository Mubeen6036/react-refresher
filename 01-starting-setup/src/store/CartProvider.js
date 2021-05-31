import { useReducer } from 'react';
import CartContext from './cart-context';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
];

const reducer = (prevState, action) =>{
    switch (action.type){
        case 'ADD_ITEM' : return addItem(prevState, action);
        case 'REMOVE_ITEM' : return removeItem(prevState, action);
        default : return prevState;
    }
}

const addItem = (state, action) =>{
    // const updatedItems  = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price * action.item.count;
    const existingCartIndex = state.items.findIndex(item =>{
        return item.id === action.item.id
    });
    let updatedItem;
    let updatedItems;
    const existingCartItem = state.items[existingCartIndex];
    if(existingCartItem){
        updatedItem = {
            ...existingCartItem,
            count : existingCartItem.count + action.item.count
        };
        updatedItems = [...state.items];
        updatedItems[existingCartIndex] = updatedItem;
        return {items : updatedItems, totalAmount : updatedAmount}
    }else{
        updatedItems  = state.items.concat(action.item);
        return {items : updatedItems, totalAmount : updatedAmount}
    }
    
}

const removeItem = (state, action) =>{
    const existingCartIndex = state.items.findIndex(item =>{
        return item.id === action.id
    });
    const existingCartItem = state.items[existingCartIndex];
    let updatedAmount = state.totalAmount - existingCartItem.price;
    let updatedItem;
    let updatedItems;
    if(existingCartItem.count > 1){
        updatedItem = {...existingCartItem, count : existingCartItem.count - 1};
        updatedItems = [...state.items];
        updatedItems[existingCartIndex] = updatedItem;
        return {items : updatedItems, totalAmount : updatedAmount};
    }else{
        updatedItems = [...state.items];
        updatedItems.splice(existingCartIndex, 1);
        return {items : updatedItems, totalAmount : updatedAmount};
    }
    
}


const CartProvider = props =>{
    const [currentState, dispatch] = useReducer(reducer, {items : [], totalAmount : 0});
    const addItemHandler = item =>{
        dispatch({ 
            type : 'ADD_ITEM',
            item : item
        })
    }
    const removeItemHandler = id =>{
        dispatch({ 
            type : 'REMOVE_ITEM',
            id : id
        })
    }
    const cartContextHelper = {
        availableMeals : DUMMY_MEALS,
        items : currentState.items,
        totalAmount : currentState.totalAmount,
        addItem : addItemHandler,
        removeItem : removeItemHandler
    }

    

    return(
        <CartContext.Provider value={
            cartContextHelper
        }>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;