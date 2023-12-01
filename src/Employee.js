import React from "react";
export default function Employee(props){
    return (
        <div>
            <h1>Name:{props.sname}</h1>
            <img src={props.imgUrl}
            height="200px" width="200px"/>
            <h6>Age:{props.age}</h6>

        </div>
    )
}