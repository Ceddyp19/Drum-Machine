import React from 'react';

class DrumPad extends React.Component {
    state = {}


    playSound = (id) => {
        let sound = document.getElementById(id)
        sound.play();
        sound.currentTime = 0;
        // this.props.toggleDescText
    }

    render() {
        return (
            <div className='drum-pad' id={this.props.id}>
                <button onClick={() => this.playSound(this.props.audioId)}>
                    {this.props.text}
                    <audio src={this.props.audio} id={this.props.audioId} className="clip" />
                </button>
            </div>);
    }
}

export default DrumPad;

