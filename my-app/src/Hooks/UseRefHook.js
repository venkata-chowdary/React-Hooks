import React, { useRef, useState } from "react"


function UseRefHook() {


    const inputRef=useRef(null)
    const [text,setText]=useState('Write something...')

    function handleClick(){
        inputRef.current.focus()
    }
    return (
        <>
            <input placeholder="write.." ref={inputRef} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleClick}>button</button>
            <p>{text}</p>

        </>
    )
}

export default UseRefHook


//it's hard to find usecases to useRef
// it is mostly used when there is a need to manipulate DOM
//or else if you can make a particular thing done easily by using vanilla JS