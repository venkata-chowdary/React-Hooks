import React, { useContext } from "react";
import { userContext } from "../Hooks/UseContextHook";

function TextBox(){

    const {userName}=useContext(userContext)
    return (
        <p>{userName}</p>
    )
}

export default TextBox