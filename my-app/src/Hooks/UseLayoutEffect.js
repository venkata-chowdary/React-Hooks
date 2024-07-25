import React, { useEffect, useLayoutEffect, useRef, useState } from "react";


function UseLayoutEffect(){

    const pRef=useRef(null)

    const [value,setValue]=useState('hello')

    useEffect(()=>{
        setValue('chowdary')
    },[])

    useLayoutEffect(()=>{
        console.log(pRef.current.innerHTML)
    },[])

    return (
        <p ref={pRef}>{value}</p>
    )
}

export default UseLayoutEffect


//usaully useLayoutEffect runs before page loads
// useEffect runs after the page loads
//useLayoutEffect then useEffect