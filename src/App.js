import React from 'react';
import Header from './components/Header'

function App(props) {
  return (
    <div className="person">
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
        <h1>{props.name}</h1>
        <p>Your age:{props.age}</p>
    </div>
  );
}

export default App;
export const DATA = 'ALI';
