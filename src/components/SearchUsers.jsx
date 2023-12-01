import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const SearchUsers=({users})=>
{
    const {register, handleSubmit, formState: { errors }}=useForm();
    const onSubmit=(data)=>
    {
        const searchResults= users.filter(
            (user)=>
                user.fn.includes(data.searchQuery)
             );
             console.log('Search Results',searchResults);

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Enter Search Name' {...register('searchQuery',{required:{value:true,message:"Enter name"}})} />
                {/* <small>{errors.searchQuery?.message}</small> */}
                <button type='submit'>Search</button>
            </form>
            
        </div>
    )
}

export default SearchUsers