import DrumPad from './DrumPad'

function PadBank (props) {
        return (
            <div id='pad-bank'>
                <DrumPad id='heater1' text='Q' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" audioId='Q' toggleDescText={props.toggleDescText}/>
                <DrumPad id='heater2' text='W' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" audioId='W' toggleDescText={props.toggleDescText}/>
                <DrumPad id='heater3' text='E' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" audioId='E' toggleDescText={props.toggleDescText}/>
                <DrumPad id='heater4' text='A' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" audioId='A' toggleDescText={props.toggleDescText}/>
                <DrumPad id='clap' text='S' audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" audioId='S' toggleDescText={props.toggleDescText}/>
                <DrumPad id='open-hh' text='D' audio="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" audioId='D' toggleDescText={props.toggleDescText}/>
                <DrumPad id='kick-n-hat' text='Z' audio="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" audioId='Z' toggleDescText={props.toggleDescText}/>
                <DrumPad id='kick' text='X' audio="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" audioId='X' toggleDescText={props.toggleDescText}/>
                <DrumPad id='closed-hh' text='C' audio="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" audioId='C' toggleDescText={props.toggleDescText}/>
            </div>);
}

export default PadBank
