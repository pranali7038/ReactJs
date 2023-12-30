import React, { useContext } from "react";
import { GlobalInfo } from "./App";
import SuperChild from "./SuperChild";
function Child()
{
    const {Appcolor} =useContext(GlobalInfo);
    console.warn("Appcolor",Appcolor);
    return(
        <div>
            <h1 style={{color:Appcolor}}>Child Component</h1>
            <SuperChild/>
        </div>
    )
}

export default Child;