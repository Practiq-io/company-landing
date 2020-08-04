import React from "react";
import "./TaskBlock.css";
import ReactBgImg from "../../../image/ReactBG.png";
import ReactLogo from "../../../image/reactLogo.svg";
import NodeLogo from "../../../image/nodeTESTSVG.svg";
import NodeBgImg from "../../../image/NodeBG.png";
import JavaLogo from "../../../image/javaLogo.svg";
import JavaBgImg from "../../../image/JavaBG.png";
import TaskCard from "./TaskCard/TaskCard";
import TaskCardRequest from "./TaskCard/TaskCardRequest/TaskCardRequest";


const TaskBlock = (props) => {
	const {animationSettings, toggle} = props;

	return (
		<section className="TB-Section">
			<div className="wrapper">
				<content className="TB-content">
					<div className="TB-title">
						<h2 
							data-aos-anchor="#task-animation-trigger"
						 	data-aos="fade-down" 
							data-aos-duration="800"
							  
						 	className="TB-title-h2"
						>
							Practiq empowers developers to grow their skills and knowledge
						</h2>
						<p 	
							data-aos-anchor="#task-animation-trigger"
							data-aos="fade-in" 
							data-aos-duration="800"
							data-aos-delay="450"

							className="TB-title-p"
						>
							Every developer has access to courses that help to increase the
							quality of their work.
						</p>
					</div>

					<div className="TB-code-box">
						<TaskCard
							cardBodyAnimation={animationSettings("fade-up", "850", "600", null)}
							cardAnimationTrigger={"#task-animation-trigger"}
							bgImgPath={ReactBgImg}
							logoPath={ReactLogo}
							textBody={
								<span>
									Writing unit tests
									<br className="tb-card-linebreak" /> for React app
									<br className="tb-card-linebreak" /> (including react routing)
								</span>
							}
						/>

						<TaskCard
							cardBodyAnimation={animationSettings("fade-up", "1250", "600", null)}
							cardAnimationTrigger={"#task-animation-trigger"}
							bgImgPath={NodeBgImg}
							logoPath={NodeLogo}
							textBody={
								<span>
									CI/CD for Node.js web
									<br className="tb-card-linebreak" /> applications
								</span>
							}
						/>

						<TaskCard
							cardBodyAnimation={animationSettings("fade-up", "1650", "600", null)}
							cardAnimationTrigger={"#task-animation-trigger"}
							bgImgPath={JavaBgImg}
							logoPath={JavaLogo}
							textBody={
								<span>
									Using jakarta to integrate
									<br className="tb-card-linebreak" /> Javadocs into your build
									<br className="tb-card-linebreak" /> process for Java
									applications
								</span>
							}
						/>

						<TaskCardRequest
							toggle={toggle}
							cardBodyAnimation={animationSettings("fade-up", "2050", "600", null)}
							cardAnimationTrigger={"#task-animation-trigger"}
						/>
					</div>
				</content>
			</div>
			<div id="task-animation-trigger" className="task-block_trigger-box"></div>
		</section>
	);
};

export default TaskBlock;
