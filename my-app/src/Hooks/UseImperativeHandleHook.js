import React, { useReducer, useRef, useState } from "react"
import Button from "../Components/Button"

function UseImperativeHandleHook(){

    const btnRef=useRef(null)

    function handleClick(){
        btnRef.current.toggleFromParent()
    }
    return (
        <>
            <button onClick={handleClick}>Parent Btn</button>
            <Button ref={btnRef}/>
        </>
    )
}


export default UseImperativeHandleHook


//ImperativeHandle is used to access the child's properties from the parent