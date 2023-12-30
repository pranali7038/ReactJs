import React, { useState } from "react";

function Login()
{
    const[user,setUser]=useState("");
    const[pass,setpass]=useState("");
    const[userError,setUserError]=useState(false);
    const[passError,setpassError]=useState(false);

    function loginhandle(e)
    {
        if(user.length<3 || pass.length<3){
            alert("type correct values")
        }else{
            alert("all good")
        }
        e.preventDefault()
    }

    function userHandler(e)
    {
        let item=e.target.value;

        if(item.length<3){
            setUserError(true)
        }else{
            setUserError(false)
        }
        setUser(item)
    }
    function passwordHandler(e)
    {
        let item=e.target.value;

        if(item.length<3){
            setpassError(true)
        }else{
            setpassError(false)
        }
        setpass(item)
    }

    return(
        <div>
            <form onSubmit={loginhandle}>
                <h1>Login</h1>
                <input type="text" placeholder="Enter password" onChange={userHandler}/>{userError?<span>User Not Valid</span>:""}
                <br/><br/>
                <input type="password" placeholder="Enter password" onChange={passwordHandler}/>{passError?<span>password Not Valid</span>:""}
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;