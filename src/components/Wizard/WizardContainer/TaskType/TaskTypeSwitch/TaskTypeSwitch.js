import React, { Component } from "react";
import "./TaskTypeSwitch.css";
import backendSelectedIcon from "./TaskTypeSwitchImg/backend-icon-selected.svg";
import backendIcon from "./TaskTypeSwitchImg/backend-icon.svg";
import frontendSelectedIcon from "./TaskTypeSwitchImg/frontend-icon-selected.svg";
import frontendIcon from "./TaskTypeSwitchImg/frontend-icon.svg";

export default class TaskTypeSwitch extends Component {
	render() {
        
        const {programming, toggleBackend, toggleFrontend} = this.props;

		return (
			<div className="task-type-switch_box">
                <div 
                    onClick={toggleFrontend}
                    className="switch_frontend-box"
                    style={{
                        borderBottom: programming === "frontend" ? "1px solid #171725" : "1px #e9e9ed solid"
                    }}
                >
                    <img 
                        src={programming === "frontend" ? frontendSelectedIcon : frontendIcon} 
                        alt="" 
                    />

					<p
                        style={{
                            color: programming === "frontend" ? "#171725" : "#696974"
                        }}
                    >
                        Frontend tasks
                    </p>

				</div>

                <div 
                    onClick={toggleBackend}
                    className="switch_backend-box"
                    style={{
                        borderBottom: programming === "backend" ? "1px solid #171725" : "1px #e9e9ed solid"
                    }}
                >
                    <img 
                        src={programming === "backend" ? backendSelectedIcon : backendIcon} 
                        alt="" 
                    />

					<p
                        style={{
                            color: programming === "backend" ? "#171725" : "#696974"
                        }}
                    >
                        Backend tasks
                    </p>

				</div>
			</div>
		);
	}
}
