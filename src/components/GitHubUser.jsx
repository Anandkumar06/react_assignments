import React from'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function GitHubUser(){

    let [users,setUsers]=useState([]);
    // useEffect(()=>
    // {
    // let gitusers=fetch("http://api.github.com/users")
    //     gitusers.then((res)=>
    //     {
    //         return res.json();
    //     })
    //     .then((apiData)=>
    //     {
    //         setUsers(apiData)
    //     })
    // },[])
    // console.log(users);

    useEffect(()=>
    {
        getgituserdata()
    },[])

    async function getgituserdata(){
        let gitusers=await fetch("http://api.github.com/users");
        gitusers=await gitusers.json();
        setUsers(gitusers)
    }

    return (
        <div>
            <ul>
                {users.map(({id,avatar_url})=>
                {
                    return <li key={id}>
                        <img style={{margin:"20px"}} height={"200px"} width={"200px"} src={avatar_url} alt="" />
                    </li>
                })}
            </ul>
        </div>
    )
}