import React from 'react';
import DrumPad from './DrumPad'

function playSound(key) {
    console.log(key)
    let snd = document.getElementById(key)
    snd.play();
    snd.currentTime = 0;
}

class Display extends React.Component {
    state = {}

    componentDidMount() {
        document.addEventListener('keydown', function (event) {

            switch (event.key) {
                case 'q':
                case 'Q':
                    playSound(event.key.toUpperCase())
                    // let snd = document.getElementById(event.key.toUpperCase())
                    // snd.play();
                    // snd.currentTime = 0;
                    break;
                case 'w':
                case 'W':

                    break;
                case 'e':
                case 'E':
                    break;
                case 'a':
                case 'A':
                    break;
                case 's':
                case 'S':

                    break;
                case 'd':
                case 'D':
                    break;
                case 'z':
                case 'Z':

                    break;
                case 'x':
                case 'X':

                    break;
                case 'c':
                case 'C':

                    break;
                default:
                    break;
            }

        })
    }



    render() {

        return (
            <div id='display'>
                <p>Drum Machine</p>
                <DrumPad id='heater1' text='Q' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" audioId='Q' />
                <DrumPad id='heater2' text='W' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" audioId='W' />
                <DrumPad id='heater3' text='E' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" audioId='E' />
                <DrumPad id='heater4' text='A' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" audioId='A' />
                <DrumPad id='clap' text='S' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" audioId='S' />
                <DrumPad id='open-hh' text='D' audio="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" audioId='D' />
                <DrumPad id='kick-n-hat' text='Z' audio="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" audioId='Z' />
                <DrumPad id='kick' text='X' audio="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" audioId='X' />
                <DrumPad id='closed-hh' text='C' audio="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" audioId='C' />
            </div>);

    }
}

export default Display

{/* <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
<audio class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
<audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
<audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
<audio class="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
<audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
<audio class="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
<audio class="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
<audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio> */}