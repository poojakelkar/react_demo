import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons:[
      {name:'many',age:28},
      {name:'manty',age:29},
      {name:'max',age:30}
    ],
    otherState:'some other value'
  }

  switchNameHandler = () =>{
   // console.log('was clicked');
   //this.state.persons[0].name='max';
   this.setState({
    persons: [
      {name:'mate',age:28},
      {name:'manu',age:29},
      {name:'max',age:27}
    ]
  })

  }

  render(){
    return(
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[0].age}>My hobbies :dancing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
      </div>
    );
    //return React.createElement('div',null,React.createElement('h1',null,'Does It works??'));
  }
}

export default App;


