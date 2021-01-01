import React, { PureComponent } from 'react';
import DrumPad from './DrumPad'

class Display extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div id='display'>
        <p>Drum Machine</p>
        <DrumPad id='heater1' text='Q' audio='' audioId='Q'/>
        <DrumPad id='heater2' text='W' audio='' audioId='W'/>
        <DrumPad id='heater3' text='E' audio='' audioId='E'/>
        <DrumPad id='heater4' text='A' audio='' audioId='A'/>
        <DrumPad id='clap' text='S' audio='' audioId='S'/>
        <DrumPad id='open-hh' text='D' audio='' audioId='D'/>
        <DrumPad id='kick-n-hat' text='Z' audio='' audioId='Z'/>
        <DrumPad id='kick' text='X' audio='' audioId='X'/>
        <DrumPad id='closed-hh' text='C' audio='' audioId='C'/>
        </div>  );

    }
}
 
export default Display