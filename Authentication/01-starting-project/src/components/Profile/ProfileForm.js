import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const passwordChangeRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  

  const passwordChangeHandler = (event) => {
    event.preventDefault();

    const Tokan = authCtx.Tokan;
    const changedPassword = passwordChangeRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCWpjJng_T_i8zNjWr9VcoeZSSwXhfuIMI',
    {
      method: 'POST',
      body: JSON.stringify({
        idToken: Tokan,
        password: changedPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      if(res.ok){
        return res.json();
      }else{
        console.log('Error occure!');
      }
    }).then(data => {
      history.replace('/');
    })

  }

  return (
    <form onSubmit={passwordChangeHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordChangeRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
