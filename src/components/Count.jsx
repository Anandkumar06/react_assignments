import React from 'react'
import { useState } from 'react'

export default function Count()
{
    let [count, setCount]=useState(0);
    let updateCounter=()=>
    {
        setCount(count+1)
    }
    
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={updateCounter}>Update</button>
        </div>
    )
}