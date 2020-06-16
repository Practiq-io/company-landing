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
		<section className="MB-Section wrapper">
			<content className="MB-content">
				<h2>Our Medium Blog</h2>

				<div className="article-block">
					<div className="article-card fiveKiller">
						<div className="article-image">
							<img src={alcohol} alt="" />
						</div>

						<div>
							<a	rel="noopener noreferrer"
								target="_blank"
								href="https://medium.com/@isid.home/five-killer-mistakes-of-software-developers-and-how-to-avoid-them-f65e8e44c887"
							>
								<p className="article-title">
									Five killer mistakes of Software developers and how to avoid
									them
								</p>
							</a>
						</div>

						<div className="article-text">
							<p>
								Earlier last week I’ve asked my friends what I should write
								about next. An interesting
							</p>
						</div>

						<div className="article-writer">
							<div className="writer-avatar">
								<a rel="noopener noreferrer" target="_blank" href="https://medium.com/@isid.home">
									<img src={IkaAvatar} alt="" />
								</a>
							</div>

							<div className="writer-info">
								<p>Ilya Sidorovich</p>
								<p>May 9</p>
							</div>
						</div>
					</div>

					<div className="article-card">
						<div className="article-image">
							<img src={hall} alt="" />
						</div>

						<div>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://medium.com/@isid.home/from-zero-to-hero-how-i-became-a-software-developer-with-a-degree-in-finance-97121b1a6da8"
							>
								<p className="article-title">
									From zero to hero: How I became a software developer with a
									degree in Finance
								</p>
							</a>
						</div>

						<div className="article-text">
							<p>A non-fiction story of a person who got lost and found</p>
						</div>

						<div className="article-writer">
							<div className="writer-avatar">
								<a rel="noopener noreferrer" target="_blank" href="https://medium.com/@isid.home">
									<img src={IkaAvatar} alt="" />
								</a>
							</div>

							<div className="writer-info">
								<p>Ilya Sidorovich</p>
								<p>May 26</p>
							</div>
						</div>
					</div>
				</div>

				<div className="all-articles">
					<a rel="noopener noreferrer" target="_blank" href="https://medium.com/@isid.home">
						See all articles
					</a>
				</div>
			</content>
		</section>
	);
};

export default MediumBlock;
