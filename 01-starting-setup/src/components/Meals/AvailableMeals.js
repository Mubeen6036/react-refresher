import { useContext } from 'react';
import Card from '../UI/Card/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import cartContext from '../../store/cart-context';
const AvailableMeals = (props) =>{
  const context = useContext(cartContext);
  const mealsList = context.availableMeals.map((meal)=>
    <MealItem key={meal.id} id = {meal.id} name = {meal.name} description = {meal.description} price = {meal.price}/>
  );
  return(
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
  );
}
export default AvailableMeals;