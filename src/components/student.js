import React from 'react'

function Student(props) {
    return (
        <div style={{border:'1px solid blue'}}>
            <h1>
             Name:{props.name}   
            </h1>
            <h2>
             email:{props.email}   
            </h2>
            <h3>
             enrollment number:{props.enrollmentnumber}   
            </h3>
            <h4>
             mobile:{props.mobile}   
            </h4>
        </div>
    )
}

export default Student
