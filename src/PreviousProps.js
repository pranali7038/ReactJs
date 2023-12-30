import React,{useEffect,useRef} from "react";
function PreviousProps(props)
{
    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count
    })
    const PreviousProps=lastVal.current
    return(
        <div>
            <h1>current val{props.count}</h1>
            <h2>Previous val {PreviousProps}</h2>
        </div>
    )
}
export default PreviousProps;