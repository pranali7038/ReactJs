import React, { useContext } from "react";
import { GlobalInfo } from "./App";
function SuperChild()
{
    const {Appcolor} =useContext(GlobalInfo);  
    console.warn("Appcolor",Appcolor);
    return(
        <div>
            <h1 style={{color:Appcolor}}>SuperChild Component</h1>
        </div>
    )
}

export default SuperChild;