import React, { Component } from 'react'
import './TaskTypeControls.css';
import ControlsBackend from './ControlsBackend/ControlsBackend';
import ControlsFrontend from './ControlsFrontend/ControlsFrontend';

export default class TaskTypeControls extends Component {
    render() {

        const {programming} = this.props;

        return (
            <div className="task-type-controls_frame">
                {
                  programming === "backend" ? <ControlsBackend /> : <ControlsFrontend />
                }
            </div>
        )
    }
}