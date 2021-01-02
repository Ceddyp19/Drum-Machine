import './App.css';
import PadBank from './PadBank'
import Display from './Display'
import React from 'react';

class App extends React.Component {
constructor(props){
  super(props)

  this.state = {text: 'Ced\'s Drum Machine'}
}

  toggleDescText = (text) =>{
      document.querySelector('#display').innerText = text
  }


  render() {
    return (
      <div className="App" id="drum-machine">
        <h1>Ced's Drum Machine</h1>
        <Display text={this.state.text} />
        <PadBank toggleDescText={this.toggleDescText}/>
      </div>
    );
  }
}

export default App;

