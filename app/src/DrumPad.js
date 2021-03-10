import React from 'react';

class DrumPad extends React.Component {
    state = {}

    playSound = (audioId) => {
        let sound = document.getElementById(audioId)
        sound.play();
        sound.currentTime = 0;
        this.props.toggleDescText(this.props.id)
    }

    render() {
        return (
            <div onClick={() => this.playSound(this.props.audioId)} className='drum-pad' id={this.props.id} style={style}>
                    {this.props.text}
                    <audio src={this.props.audio} id={this.props.audioId} className="clip" />
            </div>);
    }
}

export default DrumPad;

const style = {
    'background-color': "silver",
    'marginTop': "10px",
    'boxShadow': "black 3px 3px 5px"
}