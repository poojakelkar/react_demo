import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <Person />
      </div>
    );
    //return React.createElement('div',null,React.createElement('h1',null,'Does It works??'));
  }
}

export default App;


