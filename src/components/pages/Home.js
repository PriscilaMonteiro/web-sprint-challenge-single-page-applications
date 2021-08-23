import React, {useState, useEffect} from 'react';

import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroBtn } from './HeroElements'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Pizza from './Pizza'
import formSchema from '../../validation/formSchema';
import * as yup from 'yup';



const initialDisabled = true

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formValues, setFormValues] = useState('');
    const [formErrors, setFormErrors] = useState({
        size: '', 
        sauce: '', 
        toppings: '',
    });
    const [disabled, setDisabled] = useState(initialDisabled)

   const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]})) 
  }

    const onChange = (e) => {
    const {name, selectedOptions, value, type, attributes} = e.target;
    let submitName = name;
    let submitValue = value;
    switch (type) {
        case 'selected-one':
            submitValue = selectedOptions[0].text;
            break;
        case 'radio':
            submitValue = value;
            break;
        case 'checkbox':
            let toppings = ['pepperoni', 'sausage', 'bacon', 'spicy', 'chicken', 'onions', 'peper', 'tomato', 'olives', 'garlic', 'artichoke', 'cheese', 'pineapple', 'xcheese'];
            let selectedItem = attributes.value.nodeValue;
            let found = false;
            if (toppings.find(element => element === selectedItem)) {
                found = true;
            }
            submitName = selectedItem;
            submitValue = found;
            break;
        default:
            submitValue = value;
    }

    // console.log("submitValue----", submitValue);
    // console.log("submitName---", submitName);
    change(submitName, submitValue); 
    // console.log("formvalues---",formValues);
};


    const change =(name, value) => {
        validate(name,value);
        
        // console.log("e--", name,value);
        setFormValues({...formValues, [name]:value});
        
    };


    useEffect(() => {
        formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])




    return (
       <HeroContainer>
          
           <HeroContent>
               <HeroItems>
                   <HeroH1>Your favorite food, delivered while coding!
                       <HeroBtn>
                          <Link to="/buildyourpizza" style={ {color: 'inherit', textDecoration: 'inherit'}}>Pizza?</Link>
                          <Switch>
                            <Route path="/buildyourpizza" /> 
                            <Pizza formValues={formValues} onChange={onChange}/>
                          </Switch>
                        </HeroBtn>
                   </HeroH1>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    )
}

export default Hero
