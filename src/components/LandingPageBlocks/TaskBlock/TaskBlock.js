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
							data-aos-anchor-placement="bottom-bottom"
						 	data-aos="fade-down" 
							data-aos-duration="800"
							data-aos-delay="450"
							
						 	className="TB-title-h2"
						>
							Practiq empowers developers to grow their skills and knowledge
						</h2>
						<p 	
							data-aos-anchor-placement="bottom-bottom"
							data-aos="fade-in" 
							data-aos-duration="800"
							data-aos-delay="550"

							className="TB-title-p"
						>
							Every developer has access to courses that help to increase the
							quality of their work.
						</p>
					</div>

					<div className="TB-code-box">
						<TaskCard
							cardBodyAnimation={animationSettings("fade-up", "450", "600", null)}
							
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
							cardBodyAnimation={animationSettings("fade-up", "750", "600", null)}
							
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
							cardBodyAnimation={animationSettings("fade-up", "1050", "600", null)}
							
							bgImgPath={JavaBgImg}
							logoPath={JavaLogo}
							textBody={
								<span>
									Using jakarta to integrate
									<br className="tb-card-linebreak" /> Javadocs into your build
									<br className="tb-card-linebreak" /> process for Java applications
								</span>
							}
						/>

						<TaskCardRequest
							toggle={toggle}
							cardBodyAnimation={animationSettings("fade-up", "1350", "600", null)}
						/>
					</div>
				</content>
			</div>
		</section>
	);
};

export default TaskBlock;
