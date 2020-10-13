import React,{useState} from 'react'

function App(){
    const [count, setCount] = useState(0)

    return(
    <div>React Hooks Count{count}
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
    )
}