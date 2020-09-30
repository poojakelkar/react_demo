import React from 'react';

const Person = (props)=>{
    
    return (
        <div>
            <p>I'm a {props.name} and i'm {props.age}Years old and i'm {props.color}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;