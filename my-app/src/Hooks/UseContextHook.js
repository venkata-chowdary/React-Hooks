import React, { createContext, useContext, useState } from "react";
import Button from "../Components/Button";
import TextBox from "../Components/TextBox";



export const userContext=createContext(null)

function UseContextHook(){
    const [userName,setUsername]=useState('chwodary')

    return (
        <>
            <userContext.Provider value={{userName}}>
                <TextBox/>
            </userContext.Provider>
        </>
    )
}

export default UseContextHook