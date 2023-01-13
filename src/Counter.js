import React, {useState} from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);


    const incrementCounter = () => {
        setCounter(counter + 1)
    }
    
    return <div onClick={incrementCounter}>{counter}</div>
}


export default Counter