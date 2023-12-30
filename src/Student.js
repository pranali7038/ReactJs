import React from "react";

class Student extends React.Component{
    render()
    {
        console.log(this.props)
        return(
          <div stu>Student {this.props.name}</div>
        
        )
    }
}
export default Student;