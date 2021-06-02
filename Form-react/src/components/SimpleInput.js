import {useEffect, useState} from 'react';
import useInput from '../Hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  const [formIsvalid, setFormIsvalid] = useState(false);
  
  useEffect(() => {
    if(!nameInputHasError || !emailInputHasError){
      setFormIsvalid(true);
    }else{
      setFormIsvalid(false);
    }
  }, [nameInputHasError, emailInputHasError]);

  function formSubmitHandler(event){
    event.preventDefault();

    if(!enteredNameIsValid || !enteredEmailIsValid){
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    resetEmailInput();
  }

  const formControlClasses = nameInputHasError ? 
    'form-control invalid' : 
    'form-control';
  
  const fromControlEmail = emailInputHasError ? 
    'form-control invalid' :
    'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}/>
        {nameInputHasError && <p className='error-text'>Enter Valid Input</p>}
      </div>
      <div className={fromControlEmail}>
        <label htmlFor='email'>your Email</label>
        <input 
          type='email' 
          id='email'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}/>
          {emailInputHasError && <p className='error-text'>Enter Valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
