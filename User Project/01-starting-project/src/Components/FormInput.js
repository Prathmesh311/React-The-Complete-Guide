import React, { useState } from 'react';
import Card from './Card'
import Wrapper from '../Helper/Wrapper';
import ErrorModule from './ErrorModule';
import classes from './FormInput.module.css';
import but from './Button.module.css';

function FormInput(props){
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge]   = useState('');
    const [error, setError] = useState();

    function nameHandler(event){
        setEnteredName(event.target.value);
    }

    function ageHandler(event){
        setEnteredAge(event.target.value);
    }

    function formSubmitHandler(event){
        event.preventDefault();

        if(enteredName.trim().length ===0 || enteredAge.trim().length === 0)
        {
            setError({
                title: "Invalid Input",
                message: "Please enter valid username and age"
            });
            return;
        }

        if(+enteredAge < 1)
        {
            setError({
                title: "Invalid Age",
                message: "Please enter valid age (age > 0 )"
            });
            return;
        }

        const userData = {
            id: Math.random().toString(),
            name: enteredName,
            age: enteredAge
        }

        props.onInputData(userData);
        //console.log(userData);

        setEnteredName('');
        setEnteredAge('');

    }

    function errorHandler(){
        setError(null);
    }

    return(
        <React.Fragment>
            {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/>}

            <Card className={classes.input}>
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <label>User Name</label>
                        <input type='text' value={enteredName} onChange={nameHandler} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number" value={enteredAge} onChange={ageHandler} />
                    </div>
                    <div>
                        <button type='submit' className={but.button}>Add User</button>
                    </div>

                </form>
            </Card>

        </React.Fragment>
    )
}

export default FormInput;