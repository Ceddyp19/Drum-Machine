import React, { PureComponent } from 'react';
import DrumPad from './DrumPad'

class Display extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div id='display'>
        <p>Drum Machine</p>
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        <DrumPad />
        </div>  );

    }
}
 
export default Display