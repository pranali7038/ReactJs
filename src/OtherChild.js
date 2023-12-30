import React, { useContext } from "react";
import { GlobalInfo } from "./App";
function OtherChild()
{
    const {Appcolor} =useContext(GlobalInfo);
    console.warn("Appcolor",Appcolor);
    return(
        <div>
            <h1 style={{color:Appcolor}}>OtherChild Component</h1>
        </div>
    )
}

export default OtherChild;