import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function UserMemoHook() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;
        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("THIS WAS COMPUTED");

        return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <>
            <div> {getLongestName} </div>
            <button onClick={() => {setToggle(!toggle)}}>{" "}Toggle</button>
            {toggle && <h1> toggle </h1>}
        </>
    );
}


//continuous rerendering of claculation/computation based components slows down the website
// so to avoid this useMemo was used, it has a deppendency in which 
//useMemo make the inner fucntion run only if the dependecy had any changes