import React from 'react';
import './HeroBlock.css';
import background from "../../../image/bg.png";
import working from "../../../image/working.png";
import arrow1 from "../../../image/Arrow1.png";
import arrow2 from "../../../image/Arrow2.png";

const HeroBlock = props => {
    return (
        <section>

			 <img src={background} class="large_image" alt=""/> 


					<div className="grid_wrapper">


						<div className="section_title">
						Let our pre-vetted developers build a <span>Microservice</span> for you
						</div>

						<div className="section_text">
							<p>We are the first freelance platform that invests in education of our freelancers so that they can provide a better service with clear deliverables.</p>

							<div className="arrow">
								<img src={arrow2} alt=""/>
								<img src={arrow1} alt=""/>
							</div>
						</div>

						<div className="button">
							<button>Get started <span></span></button>
						</div>

						<div className="code_window">
							<div className="code_block">

							</div>
						</div>

						<div className="working_image">
							<img src={working} alt=""/>
						</div>
					</div>
				</section>
    )
}



export default HeroBlock;