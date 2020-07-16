import React, { Component } from 'react'
import './TestOutput.css';

export class TestOutput extends Component {

    state = {
        outputData: {}
    }

    render() {
        console.log(this.props.containerState, "DISPLAY DATA");
        const {step} = this.props;
        return (
            <div 
                style={{
                    left: step === 7 ? "50px" : "-50vw"
                }}
                className="testOutput"
            >
                <p>Test Output data</p>
            </div>
        )
    }
}

export default TestOutput
