import React from 'react';
import './PromoBlock.css';
import PromoCard from './PromoCard/PromoCard';
import PromoCardCustomize from './PromoCard/PromoCardCustomize/PromoCardCustomize';

const PromoBlock = props => {
    return (
        <section className="PB-Section">


            <div className="content_wrapper">
							<div className="weCode">
								<h2>We code for production</h2>
								
								<p>We’ve built huge projects and we know the difference between the development and production requirements. </p>

								<p>	We ensure that every developer on our platform has this knowledge before implementing a task for you. </p>

								<p>As a result you are free to choose from many deliverables that lets you seamlessly fit the results into your infrastructure.</p>
								
							</div>

							<div className="card_block">
								
								<PromoCard
									title={"Documentation"}
									subTitle={"Swagger, Javadoc, etc."}
									textBody={"Code and it’s use cases are documented so you know how to use and extend it"}
									// imgPath={}
								/>
								<PromoCard
									title={"Docker files"}
									subTitle={""}
									textBody={"Project is ready to be seamlessly deployed into your infra"}
									// imgPath={}
								/>
								<PromoCard
									title={"Unit and End to End testing"}
									subTitle={"JUnit, Jest, Nightwatch"}
									textBody={"Results are secured through unit and e2e tests"}
									// imgPath={}
								/>

								<PromoCardCustomize
									title={"Add your own deliverable standard"}
									subTitle={""}
									textBody={"Project is ready to be seamlessly deployed into your infrastructure"}
									// pic={}
								/>
								{/* <div className="card_content">
									<div className="img">
										<div className="image">

										</div>
									</div>
									<div className="title">
										<h3>Documentation</h3>
										<p class="pGrey">Swagger, Javadoc, etc.</p>
										<p>Code and it’s use cases are documented so you know how to use and extend it</p>
									</div>
								</div>

								<div className="card_content">
									<div className="img">
										<div className="image">

										</div>
									</div>
									<div className="title">
										<h3>Docker files</h3>
										<p class="pGrey">Swagger, Javadoc, etc.</p>
										<p>Project is ready to be seamlessly deployed into your infra</p>
									</div>
								</div>

								<div className="card_content">
									<div className="img">
										<div className="image">

										</div>
									</div>
									<div className="title">
										<h3>Unit and End to End testing</h3>
										<p class="pGrey">JUnit, Jest, Nightwatch</p>
										<p>Results are secured through unit and e2e tests</p>
									</div>
								</div>

								<div className="card_content">
									<div className="img">
										<div className="image">

										</div>
									</div>
									<div className="title">
										<h3>Add your own deliverable standard</h3>
										
										<p>Project is ready to be seamlessly deployed into your infrastructure</p>
									</div>
								</div> */}
							</div>
						</div>
        </section>
    )
}

export default PromoBlock;