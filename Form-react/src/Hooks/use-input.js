import {useState} from 'react';

function useInput(validateValue){
    const [enteredValue, setEnteredValue] = useState('');
    const [IsTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue;
    const hasError = !valueIsValid && IsTouched;

    function valueChangeHandler(event){
        setEnteredValue(event.target.value);
      }
    
    function inputBlurHandler(event){
        setIsTouched(true);
    }

    function reset(){
        setEnteredValue('');
        setIsTouched(false);
    }

    return{
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}

export default useInput