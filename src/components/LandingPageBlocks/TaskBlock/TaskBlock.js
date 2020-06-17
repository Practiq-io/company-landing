import React from "react";
import "./TaskBlock.css";
import ReactBgImg from "../../../image/ReactBG.png";
import ReactLogo from "../../../image/ReactLogo.png";
import NodeLogo from "../../../image/NodeLogo.png";
import NodeBgImg from "../../../image/NodeBG.png";
import JavaLogo from "../../../image/JavaLogo.png";
import JavaBgImg from "../../../image/JavaBG.png";
import TaskCard from "./TaskCard/TaskCard";
import TaskCardRequest from "./TaskCard/TaskCardRequest/TaskCardRequest";

const TaskBlock = (props) => {
	return (
		<section className="TB-Section">
			<div className="wrapper">
				<content className="TB-content">
					<div className="TB-title">
						<h2 className="TB-title-h2">
							Practiq empowers developers to grow their skills and knowledge
						</h2>
						<p className="TB-title-p">
							Every developer has access to courses that help to increase the
							quality of their work.
						</p>
					</div>

					<div className="TB-code-box">
						<TaskCard
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

						<TaskCardRequest />
					</div>
				</content>
			</div>
		</section>
	);
};

export default TaskBlock;
