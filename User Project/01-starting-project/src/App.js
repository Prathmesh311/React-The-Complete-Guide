import React, { useState } from 'react';
//import Card from './Components/Card';
import FormInput from './Components/FormInput';
import UsersList from './Components/UsersList';

const Data = [
  
]

function App() {
  const [usersData, setUsersData] = useState(Data);
  const [isValid, setIsValid] = useState(false);


  function inputHandler(enteredUserData){
    setUsersData(prevUserData => {
      return[enteredUserData, ...prevUserData]
    });
    setIsValid(true);
    console.log(enteredUserData);
    console.log(usersData);
  }

  return (
    <div>
      <h1>Hi!</h1>
      <FormInput onInputData={inputHandler}/>
      
      {isValid === true && <UsersList users={usersData} />}
      
    </div>
  );
}

export default App;
