import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        //console.log(expenseData);
        setFormState(false);
    }

    const [formState, setFormState] = useState(false);

    function addExpenseHandler()
    {
        setFormState(!formState);
        //console.log(formState);
    }

    function cancleHandler(){
        setFormState(false);
    }

    return(
        <div className="new-expense">
            {formState === false && <button onClick={addExpenseHandler}>Add New Expense</button>}
            {formState === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={cancleHandler}/>}
        </div>
    );
}

export default NewExpense;