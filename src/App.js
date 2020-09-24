import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons:[
      {name:'max',age:28}
      {name:'manu',age:29}
      {name:'mani',age:30}
    ]
  }

  render(){
    return(
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[0].age}>My hobbies :dancing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
      </div>
    );
    //return React.createElement('div',null,React.createElement('h1',null,'Does It works??'));
  }
}

export default App;


