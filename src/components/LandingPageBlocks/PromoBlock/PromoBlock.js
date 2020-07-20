import React from "react";
import "./PromoBlock.css";
import PromoCard from "./PromoCard/PromoCard";
import PromoCardCustomize from "./PromoCard/PromoCardCustomize/PromoCardCustomize";
import documentation from "../../../image/documentation.svg";
import docerFiles from "../../../image/docker.svg";
import endTesting from "../../../image/unitTest.svg";

const PromoBlock = (props) => {
	const animationByClass = (name, delay, duration, trigger) => {
		return {
			delay: delay,
			name: name,
			duration: duration,
			trigger: trigger,
		};
	};
	const cardAnimationFirst = animationByClass("fade-up-left", "450", "1000", "bottom-bottom")

	return (
		<section className="PB-Section">
			<div className="wrapper">
				<div className="content_wrapper">
					<div data-aos-anchor-placement="bottom-bottom" className="weCode">
						<h2 data-aos="fade-right" data-aos-duration="800">
							We code for production
						</h2>

						<p
							data-aos="fade-right"
							data-aos-duration="600"
							data-aos-delay="450"
						>
							We’ve built huge projects and we know the difference between the
							development and production requirements.{" "}
						</p>

						<p
							data-aos="fade-right"
							data-aos-duration="600"
							data-aos-delay="650"
						>
							{" "}
							We ensure that every developer on our platform has this knowledge
							before implementing a task for you.{" "}
						</p>

						<p
							data-aos="fade-right"
							data-aos-duration="600"
							data-aos-delay="850"
						>
							As a result you are free to choose from many deliverables that
							lets you seamlessly fit the results into your infrastructure.
						</p>
					</div>

					<div className="card_block">
						<PromoCard  
						// name, delay, duration, trigger
							
							animation={animationByClass("fade-up-left", "450", "800", "bottom-bottom")}
							title={"Documentation"}
							subTitle={"Swagger, Javadoc, etc."}
							textBody={
								"Code and it’s use cases are documented so you know how to use and extend it"
							}
							imgPath={documentation}
						/>
						<PromoCard
							animation={animationByClass("fade-up-left", "750", "800", "bottom-bottom")}
							title={"Docker files"}
							subTitle={""}
							textBody={
								"Project is ready to be seamlessly deployed into your infra"
							}
							imgPath={docerFiles}
						/>
						<PromoCard
							animation={animationByClass("fade-up-left", "950", "800", "bottom-bottom")}
							title={"Unit and End to End testing"}
							subTitle={"JUnit, Jest, Nightwatch"}
							textBody={"Results are secured through unit and e2e tests"}
							imgPath={endTesting}
						/>

						<PromoCardCustomize
							title={"Add your own deliverable standard"}
							subTitle={""}
							textBody={
								"Project is ready to be seamlessly deployed into your infrastructure"
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PromoBlock;
