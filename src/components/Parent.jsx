import React from 'react';
import Child from './Child';

function Parent(){
    let getChildData=(cdata)=>{
        console.log(cdata);
    }

    let name="Anand";
    return (
        <div>
            <h1>Parent</h1>
            <Child sname={name} pFunc={getChildData}/>
        </div>
    )
}
export default Parent