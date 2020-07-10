import React from "react";
import "./PromoBlock.css";
import PromoCard from "./PromoCard/PromoCard";
import PromoCardCustomize from "./PromoCard/PromoCardCustomize/PromoCardCustomize";
import documentation from "../../../image/documentation.svg";
import docerFiles from "../../../image/docker.svg";
import endTesting from "../../../image/unitTest.svg";

const PromoBlock = (props) => {
	const leftAnimation = {
		delay: 400,
		class: "fade-right"
	};
	const rightAnimation = {
		delay: 400,
		class: "fade-left"
	}
	return (
		<section className="PB-Section">
			<div className="wrapper">
				<div className="content_wrapper">
					<div className="weCode" data-aos="fade-right">
						<h2>We code for production</h2>

						<p>
							We’ve built huge projects and we know the difference between the
							development and production requirements.{" "}
						</p>

						<p>
							{" "}
							We ensure that every developer on our platform has this knowledge
							before implementing a task for you.{" "}
						</p>

						<p>
							As a result you are free to choose from many deliverables that
							lets you seamlessly fit the results into your infrastructure.
						</p>
					</div>

					<div className="card_block">
						<PromoCard
							title={"Documentation"}
							subTitle={"Swagger, Javadoc, etc."}
							textBody={
								"Code and it’s use cases are documented so you know how to use and extend it"
							}
							animation={leftAnimation}
							imgPath={documentation}
						/>
						<PromoCard
							title={"Docker files"}
							subTitle={""}
							textBody={
								"Project is ready to be seamlessly deployed into your infra"
							}
							animation={rightAnimation}
							imgPath={docerFiles}
						/>
						<PromoCard
							title={"Unit and End to End testing"}
							subTitle={"JUnit, Jest, Nightwatch"}
							textBody={"Results are secured through unit and e2e tests"}
							animation={leftAnimation}
							imgPath={endTesting}
						/>

						<PromoCardCustomize
							title={"Add your own deliverable standard"}
							subTitle={""}
							textBody={
								"Project is ready to be seamlessly deployed into your infrastructure"
							}
							animation={rightAnimation}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PromoBlock;
