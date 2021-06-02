import {useRef, useState} from 'react';
import styled from './MealItemForm.module.css';
import Input from '../UI/Input';

function MealItemForm(props){
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5)
            {
                setAmountIsValid(false);
                return;
            }

        props.onAddToItem(enteredAmountNumber);

    }

    return(
        <form className={styled.form} onSubmit={submitHandler}>
            <Input  ref= {amountInputRef} label="amount" 
                input={{
                id: 'amount_' + PaymentResponse.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
                
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter correct number (1-5)</p>}
        </form>
    )
}

export default MealItemForm;