import React from "react";
import "./WhoBlock.css";
import linkid from "../../../image/linkid.png";

const WhoBlock = (props) => {
	return (
		<section className="WB-Section">
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
				</div>
			</content>
		</section>
	);
};

export default WhoBlock;
