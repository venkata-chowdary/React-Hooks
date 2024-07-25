import React, { useState } from 'react'


function UseStateHook() {



    //This method do update the counter variable, but it won't rerender the component after updation
    // let counter = 0;

    // function increment(){
    //     counter++;
    // }

    //useState updates the state along with that it'll rerender the component 
    const [counter,updtateCounter]=useState(0)

    function increment(){
        updtateCounter(counter+1)
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
        </div>

    )
}

export default UseStateHook