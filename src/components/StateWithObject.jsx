import React, { useState } from 'react'

export default function StateWithObject(){

    let [fullname,setFullName]=useState({firstName:"Anand", lastName:"Mahato"});

    let updateFn=()=>
    {
        setFullName({...fullname,firstName:"Vicky"})
    }

    let updateLn=()=>
    {
        setFullName({...fullname, lastName:"Kumar"})
    }

    return (
        <div>
            <h1>{JSON.stringify(fullname)}</h1>
            <p>{fullname.firstName} {fullname.lastName}</p>
            <button onClick={updateFn}>First Name</button>
            <button onClick={updateLn}>Last Name</button>
        </div>
    )
}