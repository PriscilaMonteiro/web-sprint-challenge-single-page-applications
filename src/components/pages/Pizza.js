import { values } from 'lodash';
import React from 'react';
import {  HeroContent,  HeroBtn } from './HeroElements'
import formSchema from '../../validation/formSchema';



export default function Pizza(props) {
 

  const { formValues, onChange } = props;


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("props.formValues---", formValues);
  };



  return (
    <div>
      
      <h1>Build your own pizza!</h1>
        <form className="form" id="pizza-form" > 
          <HeroContent>
              <label>
                Choice of Size: S/M/L
                  <div>
                    <select name="size" id="size-dropdown" onChange={onChange}>
                      <option value="">Select a size</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
              </label>
              <label>
                Choice of Sauce
                  <div>
                    <input type="radio" value="red" name="sauce" onChange={onChange} /> Original Red
                    <input type="radio" value="ranch" name="sauce" onChange={onChange}  /> Garlic Ranch
                    <input type="radio" value="bbq" name="sauce" onChange={onChange}  /> BBQ 
                  </div>
              </label>
              <label>
                Choice of Toppings
                <h6>(Choose up to 10)</h6>
                  <div>
                    <input type="checkbox" value="pepperoni" name="toppings" onChange={onChange} checked={values.pepperoni} /> Pepperoni
                    <input type="checkbox" value="sausage" name="toppings" onChange={onChange} checked={values.sausage} /> Sausage
                    <input type="checkbox" value="bacon" name="toppings" onChange={onChange} checked={values.bacon} /> Canadian Bacon
                    <input type="checkbox" value="spicy" name="toppings" onChange={onChange} checked={values.spicy}/> Spicy Italian Sausage 
                    <input type="checkbox" value="chicken" name="toppings" onChange={onChange} checked={values.chicken} /> Grilled Chicken 
                    <input type="checkbox" value="onions" name="toppings" onChange={onChange} checked={values.onions} /> Onions
                    <input type="checkbox" value="peper" name="toppings" onChange={onChange} checked={values.peper} /> Green Peper
                    <input type="checkbox" value="tomato" name="toppings" onChange={onChange} checked={values.tomato} /> Diced Tomatos
                    <input type="checkbox" value="olives" name="toppings" onChange={onChange} checked={values.olives} />  Black Olives
                    <input type="checkbox" value="garlic" name="toppings" onChange={onChange} checked={values.garlic} /> Rostad Garlic 
                    <input type="checkbox" value="artichoke" name="toppings"  checked={values.artichoke}/>  Artichoke Hearts
                    <input type="checkbox" value="cheese" name="toppings" onChange={onChange} checked={values.cheese} />   Three Cheese
                    <input type="checkbox" value="pineapple" name="toppings" onChange={onChange} checked={values.pineapple} />  Pineapple
                    <input type="checkbox" value="xcheese" name="toppings" onChange={onChange} checked={values.xcheese} />  Extra Cheese
                  </div>
              </label>
                

               

              <HeroBtn type='submit' name='order' id='order-button' onClick={handleSubmit}>Place Order</HeroBtn>


          </HeroContent>
          
        </form>

    </div>
  )
}

