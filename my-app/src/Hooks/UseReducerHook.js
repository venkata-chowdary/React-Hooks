import React, { useReducer } from "react";


function reducer(state,action){
    switch(action.type){
        case 'INCREMENT':
            return {counter:state.counter++,showText:state.showText}
        case 'showText':
            return {counter:state.counter,showText:!state.showText};
        default:
            return state
    }
}

function UserReducerHook(){

    const [state,dispatch]=useReducer(reducer,{
        counter:0,
        showText:true
    })


    function handleClick(){
        dispatch({type:'INCREMENT'})
        dispatch({type:'showText'})
    }

    return (
        <>
            <p>{state.counter}</p>
            <button onClick={handleClick}>Click</button>
            {state.showText && <p>This is text</p>}

        </>
    )
}

export default UserReducerHook


//useReducers are similar to useStates, 
//they were introduced to handle many state updates using reducer
//here reducer will have list of actions,
// when a dispatch is called with a specific action, then the respective reducer action will be performed 