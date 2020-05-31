import React from 'react';
import './TaskCard.css';

const TaskCard = props => {
    return (
        <div className="TC-Cardbox">
            <div className="TC-img-box">
                <img src={props.bgImgPath} alt=""/>
            </div>
            <div className="TC-text-box">
                <div className="TC-img-frame">
                    <img className="TC-logo-img" src={props.logoPath} alt=""/>
                </div>
               
                <div className="TC-text-body">
                    {props.textBody}
                </div>
            </div>
        </div>
    )
}

export default TaskCard;