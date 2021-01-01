import React, { PureComponent } from 'react';

class DrumPad extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className='drum-pad' id={this.props.id}>
                {this.props.text}
            </div> );
    }
}
 
export default DrumPad;