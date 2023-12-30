import React from "react";

class Demo extends React.Component{
    componentWillUnmount()
    {
        alert("componentWillUnmount")
    }

    render()
    {
        return(
            <div className="App">
                <h1>Student Component</h1>
            </div>
        )
    }
}
export default Demo;