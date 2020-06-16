import React from "react";
import "./PromoBlock.css";
import PromoCard from "./PromoCard/PromoCard";
import PromoCardCustomize from "./PromoCard/PromoCardCustomize/PromoCardCustomize";
import documentation from "../../../image/documentation.png";
import docerFiles from "../../../image/docerFiles.png";
import endTesting from "../../../image/endTesting.png";

const PromoBlock = (props) => {
	return (
		<section className="PB-Section wrapper">
			<div className="content_wrapper">
				<div className="weCode">
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
						As a result you are free to choose from many deliverables that lets
						you seamlessly fit the results into your infrastructure.
					</p>
				</div>

				<div className="card_block">
					<PromoCard
						title={"Documentation"}
						subTitle={"Swagger, Javadoc, etc."}
						textBody={
							"Code and it’s use cases are documented so you know how to use and extend it"
						}
						imgPath={documentation}
					/>
					<PromoCard
						title={"Docker files"}
						subTitle={""}
						textBody={
							"Project is ready to be seamlessly deployed into your infra"
						}
						imgPath={docerFiles}
					/>
					<PromoCard
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
		</section>
	);
};

export default PromoBlock;
