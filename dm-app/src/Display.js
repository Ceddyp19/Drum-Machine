import React from 'react';
import DrumPad from './DrumPad'

function playSound(key) {
    //use the key arg to find matching element via its id
    let snd = document.getElementById(key)
    //plays sound
    snd.play();
    //resets sound after it is played
    snd.currentTime = 0;
}

class Display extends React.Component {
    state = {}

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

    toggleDescText = (text) =>{
        document.querySelector('#display p').innerText = text
    }

    sup = () =>{ console.log('sup')}
    render() {

        return (
            <div id='display'>
                <p>Drum Machine</p>
                <DrumPad id='heater1' text='Q' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" audioId='Q' toggleDescText={this.toggleDescText}/>
                <DrumPad id='heater2' text='W' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" audioId='W' toggleDescText={this.toggleDescText}/>
                <DrumPad id='heater3' text='E' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" audioId='E' toggleDescText={this.toggleDescText}/>
                <DrumPad id='heater4' text='A' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" audioId='A' toggleDescText={this.toggleDescText}/>
                <DrumPad id='clap' text='S' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" audioId='S' toggleDescText={this.toggleDescText}/>
                <DrumPad id='open-hh' text='D' audio="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" audioId='D' toggleDescText={this.toggleDescText}/>
                <DrumPad id='kick-n-hat' text='Z' audio="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" audioId='Z' toggleDescText={this.toggleDescText}/>
                <DrumPad id='kick' text='X' audio="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" audioId='X' toggleDescText={this.toggleDescText}/>
                <DrumPad id='closed-hh' text='C' audio="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" audioId='C' toggleDescText={this.toggleDescText}/>
            </div>);

    }
}

export default Display
