import { useState } from "react";




function useCounter(c)
{
    let[count, setCount]=useState(0);

    let increamentCounter=()=>
    {
        setCount(count+c)
    }

    let decreamentCounter=()=>
    {
        setCount(count-c)
    }

    return {count,increamentCounter,decreamentCounter}
}

export {useCounter}