import React from "react";
import "./WhoBlock.css";
import linkid from "../../../image/linkid.png";
import IkaMobile from "../../../image/Ika-mobile.png";
import LizaMobile from "../../../image/Liza-mobile.png";
import RomaMobile from "../../../image/Roma-mobile.png";
import linkidMobile from "../../../image/linkid-blue.png";

const WhoBlock = (props) => {
	return (
		<section className="WB-Section" id="who-block_anchor">
			<content className="WB-content">
				<h2>Who build this</h2>

				<div className="person-card">
					<div className="person">
						<div className="person-image">
							<p>Ilya Sidorovich</p>

							<div className="linkid-logo">
								<img src={linkid} alt="" />
							</div>
						</div>

						<p>
							Co-founder, Tech Senior Software Developer @ Booking.com BSc
							Finance & Marketing, KIMEP
						</p>
					</div>

					<div className="person liza">
						<div className="person-image">
							<p>Elizaveta Kolesnichenko</p>

							<div className="linkid-logo">
								<img src={linkid} alt="" />
							</div>
						</div>

						<p>
							Co-founder, Product / Strategy Head of Startup Incubation @ ACE
							Incubator MSc Cognitive Neurobiology, UvA
						</p>
					</div>

					<div className="person roma">
						<div className="person-image">
							<p>Roman Cherepivskiy</p>

							<div className="linkid-logo">
								<img src={linkid} alt="" />
							</div>
						</div>

						<p>
							Senior UI/UX Designer Computer Hardware and Software Almaty
							technological university
						</p>
					</div>

					<div className="person-mobile-block">
						<div className="person-card-mobile ika">
							<div className="person-card-image">
								<img src={IkaMobile} alt="" />
							</div>

							<div className="person-card-text">
								<p>Ilya Sidorovich</p>
								<p>
									Co-founder, Tech Senior Software Developer @ Booking.com BSc
									Finance & Marketing, KIMEP
								</p>
								<div className="person-card-logo">
									<img src={linkidMobile} alt="" />
								</div>
							</div>
						</div>

						<div className="person-card-mobile liza">
							<div className="person-card-image">
								<img src={LizaMobile} alt="" />
							</div>

							<div className="person-card-text">
								<p>Elizaveta Kolesnichenko</p>
								<p>
									Co-founder, Product / Strategy Head of Startup Incubation @
									ACE Incubator MSc Cognitive Neurobiology, UvA
								</p>
								<div className="person-card-logo">
									<img src={linkidMobile} alt="" />
								</div>
							</div>
						</div>

						<div className="person-card-mobile roma">
							<div className="person-card-image">
								<img src={RomaMobile} alt="" />
							</div>

							<div className="person-card-text">
								<p>Roman Cherepivskiy</p>
								<p>
									Senior UI/UX Designer Computer Hardware and Software Almaty
									technological university
								</p>
								<div className="person-card-logo">
									<img src={linkidMobile} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</content>
		</section>
	);
};

export default WhoBlock;
