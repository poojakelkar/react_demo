import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <Person name="max" age="28"/>
        <Person name="manu" age="29">My hobbies :dancing</Person>
        <Person name="mani" age="30"/>
      </div>
    );
    //return React.createElement('div',null,React.createElement('h1',null,'Does It works??'));
  }
}

export default App;


