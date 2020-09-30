import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
    const [person, setPerson] = useState({ name: "pooja", age: 22 });

    return (
        <div className='App'>
            <h1>Hi, I'm React App</h1>
            <p>This is really working</p>
            {/* <button onClick={switchNameHandler()}>Switch Name</button> */}
            <Person name={person.name} age={person.age} color='fair' />
        </div>
    );
};

export default App;
