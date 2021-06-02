import { useState } from 'react';

function Greeting(){
    const [isClicked, setIsClicked]  = useState(false);

    function clickHandler(){
        setIsClicked(true);
    }

    return(
        <div>
            <h2>Hello World!</h2>
            {!isClicked && <p>Good to see you here.</p>}
            {isClicked && <p>Changed!</p>}
            <button onClick={clickHandler}>please Click me!</button>
        </div>
    )
}

export default Greeting;