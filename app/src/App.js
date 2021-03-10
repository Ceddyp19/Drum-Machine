import './App.css';
import PadBank from './PadBank'
import Controls from './Controls'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { text: '' }
  }

  componentDidMount() {
    //listens for a key event
    document.addEventListener('keydown', function (event) {
      //checks length of key value pressed, if longer than one i.e. capslock button, then we know
      //automatically that's not one of how drumpad keys and should return null 
      if (event.key.length > 1) return null
      //use regex to see if the key pressed is one of our drumpad keys
      //if so we call playSoung and pass in the key pressed
      //we uppercase the key so our code will still work capsLock is on or not
      if (/[qweasdzxc]/i.test(event.key)) {
        playSound(event.key.toUpperCase())
      }
    })
  }

  toggleDescText = (text) => {
    document.querySelector('#display').innerText = text
  }


  render() {
    return (
      <div className="App" id="drum-machine">
        <h1>Drum Machine</h1>
        <PadBank toggleDescText={this.toggleDescText} />
        {/* <div className='title'>Drum Machine</div> */}
        <Controls text={this.state.text} />
      </div>
    );
  }
}

export default App;

function playSound(key) {
  //use the key arg to find matching element via its id
  let snd = document.getElementById(key)
  //plays sound
  snd.play();
  //resets sound after it is played
  snd.currentTime = 0;
  //set text in Display Component to match name of drumpad that was clicked
  let dPad = snd.parentNode.parentNode
  document.querySelector('#display').innerText = dPad.id
}
//nothingness