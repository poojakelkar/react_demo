
import React from 'react'
export default class Profile extends React.Component{
    click(){
        alert("testing");
    }

    render()
    {
        return(
            <div>
                <h1>Hello React</h1>
            <button onClick={this.click.bind(this)}>Click Me</button>
            </div>
        )
    }
}