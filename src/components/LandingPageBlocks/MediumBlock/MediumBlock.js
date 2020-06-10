import React from "react";
import "./MediumBlock.css";
import alcohol from "../../../image/alcohol.png";
import hall from "../../../image/hall.png";
import notebook from "../../../image/notebook.png";
import coffee from "../../../image/coffee.png";
import IkaAvatar from "../../../image/Ika-avatar.png";
import eye from "../../../image/eye.png";

const MediumBlock = (props) => {
	return (
		<section className="MB-Section">
			<content className="MB-content">
				<h2>Our Medium Blog</h2>

				<div className="article-block">
					<div className="article-card fiveKiller">
						<div className="article-image">
							<img src={alcohol} alt="" />
						</div>

						<div className="article-title">
							<p>
								Five killer mistakes of Software developers and how to avoid
								them
							</p>
						</div>

						<div className="article-text">
							<p>
								Earlier last week I’ve asked my friends what I should write
								about next. An interesting
							</p>
						</div>

						<div className="article-writer">
							<div className="writer-avatar">
								<img src={IkaAvatar} alt="" />
							</div>

							<div className="writer-info">
								<p>Ilya Sidorovich</p>
								<p>May 9</p>
							</div>
						</div>

						<div className="viewed">
							<p>
								<img src={eye}></img>
								453
							</p>
						</div>
					</div>

					<div className="article-card ">
						<div className="article-image">
							<img src={hall} alt="" />
						</div>

						<div className="article-title">
							<p>
								From zero to hero: How I became a software developer with a
								degree in Finance
							</p>
						</div>

						<div className="article-text">
							<p>A non-fiction story of a person who got lost and found</p>
						</div>

						<div className="article-writer">
							<div className="writer-avatar">
								<img src={IkaAvatar} alt="" />
							</div>

							<div className="writer-info">
								<p>Ilya Sidorovich</p>
								<p>May 9</p>
							</div>
						</div>

						<div className="viewed">
							<p>
								<img src={eye}></img>
								453
							</p>
						</div>
					</div>
				</div>

				{/* <div className="article-block">
					<div className="article-card fiveKiller">
						<div className="article-image">
							<img src={notebook} alt="" />
						</div>

						<div className="article-title">
							<p>
								10 Great Programming Projects to Improve Your Resume and Learn
								to Program
							</p>
						</div>

						<div className="article-text">
							<p>
								Earlier last week I’ve asked my friends what I should write
								about next. An interesting
							</p>
						</div>

						<div className="article-writer">
							<div className="writer-avatar">
								<img src={IkaAvatar} alt="" />
							</div>

							<div className="writer-info">
								<p>Ilya Sidorovich</p>
								<p>May 9</p>
							</div>
						</div>

						<div className="viewed">
							<p>
								<img src={eye}></img>
								453
							</p>
						</div>
					</div>

					<div className="article-card ">
						<div className="article-image">
							<img src={coffee} alt="" />
						</div>

						<div className="article-title">
							<p>How To Become Ridiculously Self-Aware In 20 Minutes</p>
						</div>

						<div className="article-text">
							<p>A non-fiction story of a person who got lost and found</p>
						</div>

						<div className="article-writer">
							<div className="writer-avatar">
								<img src={IkaAvatar} alt="" />
							</div>

							<div className="writer-info">
								<p>Ilya Sidorovich</p>
								<p>May 9</p>
							</div>
						</div>

						<div className="viewed">
							<p>
								<img src={eye}></img>
								453
							</p>
						</div>
					</div>
				</div> */}

				<div className="all-articles">
					<p>See all articles</p>
				</div>
			</content>
		</section>
	);
};

export default MediumBlock;
