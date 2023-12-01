import React, { useState } from 'react'

export default function SetStateAsynchronous(){
    let [count,setCount]=useState(0);

    let updateCount=()=>
    {
        for(let i=1;i<=5;i++)
        {
            setCount((previousState)=>
            {
                return previousState+1
            })
        }
    }
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={updateCount}>+</button>
        </div>
    )
}