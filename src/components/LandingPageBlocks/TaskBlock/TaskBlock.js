import React from 'react';
import './TaskBlock.css';
import TaskCard from './TaskCard/TaskCard';
import TaskCardCostomize from '../TaskBlock/TaskCard/TaskCardCostomize/TaskCardCostomize';
import ReactBgImg from "../../../image/ReactBG.png";
import ReactLogo from "../../../image/ReactLogo.png";
import NodeLogo from "../../../image/NodeLogo.png";
import NodeBgImg from "../../../image/NodeBG.png";
import JavaLogo from "../../../image/JavaLogo.png";
import JavaBgImg from "../../../image/JavaBG.png";



const TaskBlock = props => {
    return (
        <section className="TB-Section">
            <content className="TB-content">
                <div className="TB-title">
									<h2>Practiq empowers developers to grow their skills and knowledge</h2>
									<p>Every developer has access to courses that help to increase the quality of their work.</p>
								</div>

								{/* <div className="TB-card">
									<TaskCard
										CardImgPath = {ReactBgImg}
										CardLogoPath = {ReactLogo}
										CardTextPath = {"Writing unit tests for React app (including react routing)"}
									/>

									<TaskCard
										CardImgPath = {NodeBgImg}
										CardLogoPath = {NodeLogo}
										CardTextPath = {"CI/CD for Node.js web applications"}
									/>

									<TaskCard
										CardImgPath = {JavaBgImg}
										CardLogoPath = {JavaLogo}
										CardTextPath = {"Using jakarta to integrate Javadocs into your build process for Java applications"}
									/>

									<TaskCardCostomize
									
									/>

									
									
								</div> */}

								<div className="center">
								<div className="TB-card">
									<TaskCard
										CardImgPath = {ReactBgImg}
										CardLogoPath = {ReactLogo}
										CardTextPath = {"Writing unit tests for React app (including react routing)"}
									/>

									<TaskCard
										CardImgPath = {NodeBgImg}
										CardLogoPath = {NodeLogo}
										CardTextPath = {"CI/CD for Node.js web applications"}
									/>

									<TaskCard
										CardImgPath = {JavaBgImg}
										CardLogoPath = {JavaLogo}
										CardTextPath = {"Using jakarta to integrate Javadocs into your build process for Java applications"}
									/>

									<TaskCardCostomize
									
									/>

									
									
								</div>
								</div>
            </content>
        </section>
    )
}

export default TaskBlock;