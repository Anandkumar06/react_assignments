import { useForm } from "react-hook-form";
import "./css/ImageSlider.css"
import { useEffect, useState } from "react";
import SearchUsers from "./SearchUsers";

export default function ReactHookForm()
{
    const { register, handleSubmit, formState: { errors } } = useForm();
   
   

    let submitFormData=(fdata)=>{
       const storedData=JSON.parse(localStorage.getItem("users"))||[];

       const newUser=[...storedData,fdata];
       localStorage.setItem("users",JSON.stringify(newUser));


       
    }

    const [users, setUsers]=useState([]);
    useEffect(()=>
    {
        const storedUserData=JSON.parse(localStorage.getItem("users")) || []
        setUsers(storedUserData)
    },[]);

    

    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(submitFormData)}  className="form">
            <h2>User Form</h2>

                <div className="input-div">
                    <input type="text" placeholder="Full Name" {...register("fn",{required:{value:true,message:"Full name is required"},
                    minLength:{value:6,message:"Full name should contain minimum 6 characters"}})} />
                    <small>{errors.fn?.message}</small>
                    </div>
                <div className="input-div">
                    <input type="tel" placeholder="Mobile" {...register("mob",{required:{value:true,message:"Mobile is required"},
                minLength:{value:10,message:"Mobile should contain minimum 10 numbers"},pattern:{value:/^[6-9][0-9]{9}$/,message:"Mobile should contain only numbers"}})} />
                    <small>{errors.mob?.message}</small>
                    </div>
                <div className="input-div">
                    <input type="email" placeholder="Email" {...register("email",{required:{value:true,message:"Email is required"},
                pattern:{value:/\S+@\S+\.\S+/.test(register.email),message:"Inavlid email format"}})} />
                    <small>{errors.email?.message}</small>
                    </div>
                <div className="input-div">
                    <input type="password" placeholder="Password" {...register("pwd",{required:{value:true,message:"Password must be entered"},
                minLength:{value:8,message:"Minimum 8 characters is required"}, pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/,message:"At least one special symbol(!@#$%^&*=+-_)"}})} />
                    <small>{errors.pwd?.message}</small>

                    </div>
                    <div className="input-div">
                        <button type="submit">Register</button>
                    </div>
            </form>
            <SearchUsers users={users}/>
        </div>
    )
}