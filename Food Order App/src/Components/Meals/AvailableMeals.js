import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import styled from './AvailableMeals.module.css';
import MealsItem from './MealsItem';


function AvailableMeals(){
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
      async function fetchMeals(){
        setIsLoading(true);
        setError();
        const Response = await fetch('https://react-http-10733-default-rtdb.firebaseio.com/Meals.json');

        if(!Response.ok){
          throw new Error('Somethings Went Wrong!');
        }
        const data = await Response.json();

        const loadedMeals = [];

        for(const key in data){
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price
          })
        }
        setMeals(loadedMeals);
        setIsLoading(false);
      }
      
        fetchMeals().catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }, []);

    const mealsList = meals.map(meal =>  
      <MealsItem 
        id= {meal.id}
        key = {meal.id}
        name = {meal.name}
        description = {meal.description}
        price = {meal.price}
      />
    )
    
    
    return(
      <section className={styled.meals}>
        <Card>
          <ul>
              {error && <h3>{error}</h3>}
              {isLoading && <h3>Loading...</h3>}
              {!isLoading && mealsList}
          </ul>
        </Card>
      </section>
    )
}

export default AvailableMeals;