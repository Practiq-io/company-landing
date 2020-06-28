import React, { Component } from 'react'
import './TaskTypeOutput.css';
import GeneralPurposeApi from './OutputComponents/GeneralPurposeAPI';
import ApiConnectorAdapter from './OutputComponents/ApiConnectorAdapter';
import LongRunningProcess from './OutputComponents/LongRunningProcess';
import SpaLandingpageComponent from './OutputComponents/SpaLandingpageComponent';



export default class TaskTypeOutput extends Component {
    render() {
        return (
            <div className="task-type-output_frame">


                {/* <GeneralPurposeApi /> */}
                {/* <ApiConnectorAdapter /> */}
                {/* <LongRunningProcess /> */}
                <SpaLandingpageComponent />

            </div>
        )
    }
}