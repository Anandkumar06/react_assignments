import React from 'react';

export default function Child({sname,pFunc}){
    let chilStyles={
        width:"300px",
        height:"300px",
        border:"2px solid red",
        margin:"50px auto"

    }

    let ChildData="Hello React";
    let curDate=new Date().toLocaleDateString();
    let curTime=new Date().toLocaleTimeString();

    pFunc(ChildData)
    return (
        <div style={chilStyles}>
            <h1>{sname}</h1>
            <p>Time={curTime}</p>
            <p>Date={curDate}</p>
        </div>
    )
}