import { useRef, useState } from 'react';
import Input from '../UI/Input/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) =>{
    const [amountIsValid, setAmountIsValid] = useState(true);
    const inputReference = useRef();
    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount  = inputReference.current.value;
        const enteredAmountNumber  = +inputReference.current.value;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber >5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label='Amount'
             ref = {inputReference}
             input={{
                id: 'Amount',
                type : 'number',
                min : 1,
                max : 5,
                step : 1,
                defaultValue : 1
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter a valid Amount</p>}
        </form>
    );
}
export default MealItemForm;