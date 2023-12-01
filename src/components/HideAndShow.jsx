import React, { useState } from 'react';

export default function HideAndShow(){
    let [isbool, setIsbool]=useState(false);


      // let hideImage=()=>
        // {
        //     setIsbool(true)
        // }
    
        // let showImage=()=>
        // {
        //     setIsbool(false)
        // }

    function hideShow()
    {
      

        setIsbool(!isbool);
    }

 

    return (
        <div>
            {isbool===false &&
            <img width={"200px"} height={"200px"} src='https://cdn.pixabay.com/photo/2023/07/28/14/37/flower-8155370_1280.jpg' alt='No pics'/>}
            {/* <button onClick={showImage}>Show</button> */}
            <button onClick={hideShow}>{isbool? "Show": "Hide"}</button>
        </div>
    )
}