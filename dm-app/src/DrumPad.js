import React from 'react';

class DrumPad extends React.Component {
    state = {  }

    playSound = (id) => {
       console.log(id)
    }

    render() { 
        return ( 
            <div className='drum-pad' id={this.props.id}>
                <button onClick={() => this.playSound(this.props.audioId)}>
                {this.props.text}
                <audio src="" id={this.props.audioId} className="clip"/>
                </button>
            </div> );
    }
}
 
export default DrumPad;