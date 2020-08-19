import React from "react";
import "./MediumBlock.css";
import alcohol from "../../../image/alcohol.svg";
import hall from "../../../image/hall.svg";
import IkaAvatar from "../../../image/Ika-avatar.svg";
import laptop from "../../../image/mediumLaptop.svg";
import book from "../../../image/mediumBook.svg";

const MediumBlock = () => {
	return (
		<section className="MB-Section">
			<div className="wrapper">
				<content className="MB-content">
					<h2
						data-aos-anchor-placement="center-center"
						data-aos="fade-down"
						data-aos-duration="1000"
					>
						Our Medium Blog
					</h2>

					<div className="medium_card_frame">
						
						<div
							data-aos-anchor-placement="center-center"
							data-aos="fade-right"
							data-aos-delay="450"
							data-aos-duration="1000"

							className="medium-card medium-first-card"
						>
							<img className="medium-card_img" src={alcohol} alt="" />

							<div className="medium-card_text-box">
							<div className="medium-text-wrapper">
							<h4 className="medium-card_title">
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://medium.com/@isid.home/five-killer-mistakes-of-software-developers-and-how-to-avoid-them-f65e8e44c887"
									>
										Five killer mistakes of Software developers and how to avoid
										them
									</a>
								</h4>

								<p className="medium-card_sub-title">
									Earlier last week I’ve asked my friends what I should write
									about next. An interesting
								</p>
							</div>
							
								<div className="medium-card_avatar-box">
									<img className="medium-card_avatar" src={IkaAvatar} alt="" />

									<div className="medium-card_avatar-text">
										<p className="medium-card_avatar-name">Ilya Sidorovich</p>
										<p className="medium-card_avatar-date">May 9</p>
									</div>
								</div>
							</div>
						</div>

						<div 
							data-aos-anchor-placement="center-center"
							data-aos="fade-left"
							data-aos-delay="450"
							data-aos-duration="1000"

							className="medium-card medium-second-card"
						>
							<img className="medium-card_img" src={hall} alt="" />

							<div className="medium-card_text-box">
							<div className="medium-text-wrapper">
							<h4 className="medium-card_title">
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://medium.com/@isid.home/from-zero-to-hero-how-i-became-a-software-developer-with-a-degree-in-finance-97121b1a6da8"
									>
										From zero to hero: How I became a software developer with a degree in Finance
									</a>
								</h4>
								<p className="medium-card_sub-title">
									A non-fiction story of a person who got lost and found
								</p>
							</div>
								
								<div className="medium-card_avatar-box">
									<img className="medium-card_avatar" src={IkaAvatar} alt="" />

									<div className="medium-card_avatar-text">
										<p className="medium-card_avatar-name">Ilya Sidorovich</p>
										<p className="medium-card_avatar-date">May 9</p>
									</div>
								</div>
							</div>
						</div>

						

					</div>
					<div className="medium_card_frame">
						
						<div
							data-aos-anchor-placement="center-center"
							data-aos="fade-right"
							data-aos-delay="450"
							data-aos-duration="1000"

							className="medium-card medium-first-card"
						>
							<img className="medium-card_img" src={laptop} alt="" />

							<div className="medium-card_text-box">

								<div className="medium-text-wrapper">

									<h4 className="medium-card_title">
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://medium.com/@isid.home/five-killer-mistakes-of-software-developers-and-how-to-avoid-them-f65e8e44c887"
										>
											10 Great Programming Projects to Improve Your Resume and Learn to Program
										</a>
									</h4>

									<p className="medium-card_sub-title">
										Earlier last week I’ve asked my friends what I should write
										about next. An interesting
									</p>
								</div>
								

								<div className="medium-card_avatar-box">
									<img className="medium-card_avatar" src={IkaAvatar} alt="" />

									<div className="medium-card_avatar-text">
										<p className="medium-card_avatar-name">Ilya Sidorovich</p>
										<p className="medium-card_avatar-date">May 9</p>
									</div>
								</div>

								
							</div>

							
						</div>

						<div 
							data-aos-anchor-placement="center-center"
							data-aos="fade-left"
							data-aos-delay="450"
							data-aos-duration="1000"

							className="medium-card medium-second-card"
						>
							<img className="medium-card_img" src={book} alt="" />

							<div className="medium-card_text-box">

							<div className="medium-text-wrapper">
								<h4 className="medium-card_title">
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://medium.com/@isid.home/from-zero-to-hero-how-i-became-a-software-developer-with-a-degree-in-finance-97121b1a6da8"
										>
											From zero to hero: How I became a software developer with a degree in Finance
										</a>
									</h4>
									<p className="medium-card_sub-title">
										A non-fiction story of a person who got lost and found
									</p>
							</div>
								
								<div className="medium-card_avatar-box">
									<img className="medium-card_avatar" src={IkaAvatar} alt="" />

									<div className="medium-card_avatar-text">
										<p className="medium-card_avatar-name">Ilya Sidorovich</p>
										<p className="medium-card_avatar-date">May 9</p>
									</div>
								</div>
							</div>
						</div>

						

					</div>



					<div className="medium_card_frame_mobile">

						<div className="medium-card_mobile">
							<div className="medium-card_mobile-upper-box">
								<img className="medium-card_img_mobile" src={alcohol} alt="" />

								<div className="medium-card_text-box_mobile">
									<p className="medium-card_title_mobile">
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://medium.com/@isid.home/five-killer-mistakes-of-software-developers-and-how-to-avoid-them-f65e8e44c887"
										>
											Five killer mistakes of Software developers and how to avoid
											them
										</a>
									</p>

									<p className="medium-card_avatar-date">May 9</p>
								</div>
							</div>

							<p className="medium-card_sub-title_mobile">
								Earlier last week I’ve asked my friends what I should write
								about next. An interesting
							</p>
						</div>

						<div className="medium-card_mobile">
							<div className="medium-card_mobile-upper-box">
								<img className="medium-card_img_mobile" src={hall} alt="" />

								<div className="medium-card_text-box_mobile">
									<p className="medium-card_title_mobile">
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://medium.com/@isid.home/five-killer-mistakes-of-software-developers-and-how-to-avoid-them-f65e8e44c887"
										>
											From zero to hero: How I became a software developer with a degree in Finance
										</a>
									</p>

									<p className="medium-card_avatar-date">May 9</p>
								</div>
							</div>

							<p className="medium-card_sub-title_mobile">
								Earlier last week I’ve asked my friends what I should write
								about next. An interesting
							</p>
						</div>

						<div className="medium-card_mobile">
							<div className="medium-card_mobile-upper-box">
								<img className="medium-card_img_mobile" src={laptop} alt="" />

								<div className="medium-card_text-box_mobile">
									<p className="medium-card_title_mobile">
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://medium.com/@isid.home/five-killer-mistakes-of-software-developers-and-how-to-avoid-them-f65e8e44c887"
										>
											10 Great Programming Projects to Improve Your Resume and Learn to Program
										</a>
									</p>

									<p className="medium-card_avatar-date">May 9</p>
								</div>
							</div>

							<p className="medium-card_sub-title_mobile">
								Earlier last week I’ve asked my friends what I should write about next. An interesting
							</p>
						</div>

						<div className="medium-card_mobile">
							<div className="medium-card_mobile-upper-box">
								<img className="medium-card_img_mobile" src={book} alt="" />

								<div className="medium-card_text-box_mobile">
									<p className="medium-card_title_mobile">
										<a
											rel="noopener noreferrer"
											target="_blank"
											href="https://medium.com/@isid.home/five-killer-mistakes-of-software-developers-and-how-to-avoid-them-f65e8e44c887"
										>
											How To Become Ridiculously Self-Aware In 20 Minutes
										</a>
									</p>

									<p className="medium-card_avatar-date">May 9</p>
								</div>
							</div>

							<p className="medium-card_sub-title_mobile">
								A non-fiction story of a person who got lost and found
							</p>
						</div>

					</div>

					<div
						data-aos-anchor-placement="bottom-bottom"
						data-aos="fade-up"
						data-aos-delay="750"
						data-aos-duration="1000"
						className="all-articles"
					>
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://medium.com/@isid.home"
						>
							See all articles
						</a>
					</div>
				</content>
			</div>
		</section>
	);
};

export default MediumBlock;
