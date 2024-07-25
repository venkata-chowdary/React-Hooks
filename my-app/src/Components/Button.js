import React, { useImperativeHandle, useState,forwardRef, useContext } from "react"
import { userContext } from "../Hooks/UseContextHook"

const Button = forwardRef((props, ref) => {


    const [toggle, setToggle] = useState(false)
    console.log(userContext)
    
    useImperativeHandle(ref,()=>({
        toggleFromParent: ()=>{
            setToggle(!toggle)
        }
    }))
    return (
        <>
            <button>{}</button>
            {toggle && <p>Toggle</p>}

        </>)
})

export default Button