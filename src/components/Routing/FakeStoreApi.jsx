import axios from 'axios'
import React, { useEffect, useState } from 'react'



export default function FakeStoreApi()
{ 
    let [products, setProducts]=useState([])

    useEffect(()=>
    {
        getproductsdetails()
    },[])

    async function getproductsdetails()
    {
        let {data}= await axios.get("https://fakestoreapi.com/products")
        setProducts(data)
    }

    return (
        <div>
            <ul>
                {products.map(({id,image})=>
                {
                    return <li key={id}>
                        <img style={{margin:"20px"}} height={"200px"} width={"200px"} src={image} alt="" />
                    </li>
                })}
            </ul>
        </div>
    )
}