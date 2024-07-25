import React, { useEffect, useInsertionEffect, useState } from "react";
import axios from 'axios'
function UseEffectHook() {

    const [randomText, setRandomText] = useState('')
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                setRandomText(response.data.value)
                console.log("API WAS CALLED.")
            })
    }, [counter])

    function handleCounter(){
        setCounter(counter + 1)
    }

    return (
        <>
            <h2>UseEffect Hook</h2>
            <p>{counter}</p>
            <button onClick={handleCounter}>Cllick mE</button>
            <p>{randomText}</p>
        </>
    )
}

export default UseEffectHook

 
//if there is no dependency, the useEffect will be called once and then as the random text state updates the useEffect runs
//if the dependency is empty, the useEffect will run for one time that for the intial page render
//counter in dependency, for each button click the counter updates, this update causes the useEffect to call/run again.