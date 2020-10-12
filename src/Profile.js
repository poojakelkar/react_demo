import { render } from '@testing-library/react'
import React from 'react'
export default function Profile(){
    click(){
        alert("testing")
    }

    render()
    {
        return(
            <div>Hello React
            <button onClick={()=>this.click.bind()}>Click Me</button>
            </div>
        )
    }
}