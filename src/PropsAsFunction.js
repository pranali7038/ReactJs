import React from "react";

function PropsAsFunction(Props)
{
    return(
        <div>
            <h1>Component</h1>
            <button onClick={()=>Props.data()}>Call data function</button>
        </div>
    )
}

export default PropsAsFunction;