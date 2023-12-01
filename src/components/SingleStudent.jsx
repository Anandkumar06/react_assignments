import React from "react";
import StudentImage from "./StudentImage";
import StudentName from "./StudentName";
export default function SingleStudent({name,image})
{
return (
    <>
    <section className="card">
        <StudentImage image={image}/>
        <StudentName name={name}/>
    </section>
    </>
)
}