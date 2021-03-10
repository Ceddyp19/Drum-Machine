const Controls = (props) => {
    return (
        <div id='controller' className='container'>

            {/* Code commented out because controls aren't working yet */}

            {/* <div className='control'>
                <p>Power</p>
                <div className='select'>
                    <div className='inner'></div>
                </div>
            </div> */}
            <p id='display'>{props.text}</p>
            {/* <div className='volume-slider'>
                <input type='range' step='0.01' min='0' max='1' value='.25' />
            </div> */}
            {/* <div className='control'>
                <p>Bank</p>
                <div className='select'>
                    <div className='inner'></div>
                </div>

            </div> */}
        </div>
    )
}
export default Controls;