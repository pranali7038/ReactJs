import React, { useState } from "react";
function Profile()
{
    const[loggedIn,setLogedIn]= useState(1)
    //let v=2;
    //1,2,3
    return(
        <div>
            {loggedIn==1?<h1>Welcome 1</h1>
            :loggedIn==2?<h1>Welcome 2</h1>
            :<h1>welcome 3</h1>}
        </div>

         /*<div>   //we can use variable also
            {v==1?<h1>Welcome 1</h1>
            :v==2?<h1>Welcome 2</h1>
            :<h1>welcome 3</h1>}
        </div>*/
    )
}
export default Profile;