import { useState } from "react"
import "./css/CustomFormValidaation.css"

function CustomFormValidation()
{
    let [formData,setFormData]=useState({fn:"", mob:"", pwd:""})
    let [error,setError]=useState({})

    //! Updating state with entered data from UI
    let changeFormData=({target:{value,name}})=>
    {
        setFormData({...formData,[name]:value})
    } 
    //! Submiting the form
    let submitFormData=(e)=>
    {
        e.preventDefault();
        setError(validate(formData))
    }
    //! Validating the form data
    let validate=(fdata)=>
    {
        let errorMessage={};
        //! fn validation code
        if(!fdata.fn)
        {
            
            errorMessage.fnMessage="Full name is mandatory"

        }
        else if(fdata.fn.length<6)
        {
            errorMessage.fnMessage="Full name should contain atleast 6 characters"
        }

        //! Mob validation code

        if(!fdata.mob)
        {
            errorMessage.mobMessage="Mobile is Mandatory"
        }

        //! Email validation code

        
        return errorMessage
    }
    console.log(error);

    return (
        <div>
            <form onSubmit={submitFormData}  className="form">
                <div className="input-div">
                    <input type="text" placeholder="Full Name" name="fn" value={formData.fn} onChange={changeFormData} />
                    <small>{error.fnMessage && error.fnMessage}</small>
                    </div>
                <div className="input-div">
                    <input type="tel" placeholder="Mobile" name="mob" value={formData.mob} onChange={changeFormData} />
                    <small>{error.mobMessage && error.mobMessage}</small>
                    </div>
                <div className="input-div">
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={changeFormData} />
                    {/* <small></small> */}
                    </div>
                <div className="input-div">
                    <input type="password" placeholder="Password" name="=pwd" value={formData.pws} onChange={changeFormData} />
                    </div>
                    <div className="input-div">
                        <button type="submit">Register</button>
                    </div>
            </form>
        </div>
    )
}

export default CustomFormValidation