import React from 'react';
import './TaskBlock.css';
import ReactBgImg from "../../../image/ReactBG.png";
import ReactLogo from "../../../image/ReactLogo.png";
import NodeLogo from "../../../image/NodeLogo.png";
import NodeBgImg from "../../../image/NodeBG.png";
import JavaLogo from "../../../image/JavaLogo.png";
import JavaBgImg from "../../../image/JavaBG.png";
import TaskCard from './TaskCard/TaskCard';
import TaskCardRequest from './TaskCard/TaskCardRequest/TaskCardRequest';


const TaskBlock = props => {
    return (
        <section className="TB-Section">
            <content className="TB-content">

                <div className="TB-title">
					<h2 className="TB-title-h2">Practiq empowers developers to grow their skills and knowledge</h2>
					<p className="TB-title-p">Every developer has access to courses that help to increase the quality of their work.</p>
				</div>

				<div className="TB-code-box">

					<TaskCard
						bgImgPath={ReactBgImg}
						logoPath={ReactLogo}
						textBody={<span>Writing unit tests<br/> for React app<br/> (including react routing)</span>}
					/>

					<TaskCard
						bgImgPath={NodeBgImg}
						logoPath={NodeLogo}
						textBody={<span>CI/CD for Node.js web<br/> applications</span>}
					/>

					<TaskCard
						bgImgPath={JavaBgImg}
						logoPath={JavaLogo}
						textBody={<span>Using jakarta to integrate<br/> Javadocs into your build<br/> process for Java applications</span>}
					/>

					<TaskCardRequest/>


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

								{/* <div className="center">
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
								</div> */}
            </content>
        </section>
    )
}

export default TaskBlock;