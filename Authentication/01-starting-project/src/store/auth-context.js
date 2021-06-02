import React, { useState } from 'react';

const AuthContext = React.createContext({
    Tokan: null,
    isLoggedIn: false,
    login: (tokan) => {},
    logout: () => {}
});

/*const retrieveStoredTokan = () => {
    const storedTokan = localStorage.getItem('tokan');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if(remainingTime <= 60000){
        localStorage.removeItem('tokan');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return{
        tokan: storedTokan,
        duration: rem
    }
}*/

const calculateRemainingTime = (exporationTime) =>{
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(exporationTime).getTime();

    const remainingTime = adjExpirationTime - currentTime;
    return remainingTime;
}

export const AuthContextProvider = (props) => {
    const initialTokan = localStorage.getItem('tokan');
    const [tokan , setTokan] = useState(initialTokan);

    const userIsLoggedIn = !!tokan;

    const loginHandler =(id, exporationTime)=>{
        setTokan(id);
        localStorage.setItem('tokan', id);

        const remainingTime = calculateRemainingTime(exporationTime);

        setTimeout(logoutHandler, remainingTime);
    }

    const logoutHandler = () => {
       setTokan(null)
       localStorage.removeItem('tokan');
    }

    const contextValue = {
        Tokan: tokan,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;