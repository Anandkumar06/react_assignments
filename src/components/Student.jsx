import React from 'react';

import SingleStudent from "./SingleStudent";

export default function Student({name,image}){
    return (
        <React.Fragment>
        <SingleStudent name={name} image={image}/>
        </React.Fragment>
    )
}

