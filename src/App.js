// import { render } from "@testing-library/react";
// import React, { useState } from "react";
// import "./App.css";
// import Person from "./Person/Person";
// import Profile from './Profile'

// const App = (props) => {
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             { name: "many", age: 28 },
//             { name: "manu", age: 29 },
//             { name: "max", age: 30 },
//         ],
//         otherState: "some other",
//     });

//     const switchNameHandler = () => {
//         //console.log('was clicked');
//         //personsState.persons[0].name="maxmalian";
//         setPersonsState({
//             persons: [
//                 { name: "maxmilian", age: 28 },
//                 { name: "manu", age: 29 },
//                 { name: "max", age: 40 },
//             ],
//         });
//     };

//     const nameChangedHandler=(event)
//     return (
//         <div className='App'>
//             <h1>Hi, I'm React App</h1>
//             <p>This is really working</p>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person
//                 name={personsState.persons[0].name}
//                 age={personsState.persons[0].age}
//             />
//             <Person
//                 name={personsState.persons[1].name}
//                 age={personsState.persons[0].age}>
//                 My hobbies :dancing
//             </Person>
//             <Person
//                 name={personsState.persons[2].name}
//                 age={personsState.persons[0].age}
//             />
            
//         </div>
//     );
//     //return React.createElement('div',null,React.createElement('h1',null,'Does It works??'));
// };

// export default App;

// // state = {
// //     persons: [
// //         { name: "many", age: 28 },
// //         { name: "manu", age: 29 },
// //         { name: "max", age: 30 },
// //     ],
// //     otherState: "some other",
// // };
