import React from "react";
class RenderLifeCycle extends React.Component{
    render()
    {
        console.warn("Render Method",this.props) //it will update new values
        return(
            <div>
                <h1>USer Component{this.props.name}</h1>
            </div>
        )
    }
}

export default RenderLifeCycle;