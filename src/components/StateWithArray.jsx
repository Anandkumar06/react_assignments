// import { css } from '@emotion/core'
import React, { useState } from 'react'

export default function StateWithArray(){

    

    const [addColor, setAddColor]=useState([])
    // let addColors=[];
    let updateColor=()=>
    {

        let colors=["Violet","Indigo","Blue","Green","Yellow","Orange","Red"];
        setAddColor(current=>[...current,...colors]);
    }

    return (
        <div>
           <div>
            <button onClick={updateColor}>Add New Colors</button>
            </div>
            {addColor.map((element,index)=>{
                return (
                    <div key={index}>
                        <h2>{element}</h2>
                    </div>
                )
            })}
        </div>
    )
}