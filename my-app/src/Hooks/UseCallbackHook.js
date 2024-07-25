import axios from "axios";
import { useCallback, useState } from "react";
import Child from "../Components/Child";

export default function UseCallbackHook() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Yo, pls sub to the channel!");

    // const returnComment = useCallback((name) => {
    //     return data + name
    // }, [data]);

    const returnComment = ((name) => {
        return data + name
    });

    return (
        <>
            <Child returnComment={returnComment} />
            <button onClick={() => {setToggle(!toggle);}}>{" "}Toggle</button>
            {toggle && <h1> toggle </h1>}
        </>
    );
}


//here without usecall for every toggle returnComment rerenders
// and in child component, an useEffect with returnComment rerenders for every toggle in which toogle and childComponent
//didn't have any direct sort of relation
// so, for every toogle the page rerenders which leads to function creation again and again
// so, useCallback is used to avoid this problem
//useMemo also had a similar purpose but useMemo stores values but not functions
//so useCallback was used