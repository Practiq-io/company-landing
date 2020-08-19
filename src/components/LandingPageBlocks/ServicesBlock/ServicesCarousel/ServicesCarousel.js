import React, { Component } from "react";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import activeLeftArrow from './CarouselCustomArrows/ActiveLeft.svg';
import activeRightArrow from './CarouselCustomArrows/ActiveRight.svg';
import "./ServicesCarouselFix.css";
import Slider from "react-slick";



class ServicesCarousel extends Component {
	state = {
		activeSlide: 0,
	};
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}
	settings = {
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		infinite: false,
		focusOnSelect: false,
		variableWidth: true,
		arrows: false,
		beforeChange: (current, next) => this.setState({ activeSlide: next })
	};
	render() {
		return (
			<>
				<Slider ref={(c) => (this.slider = c)} {...this.settings}>
					{this.props.children}
				</Slider>
				<div 
					style={{
						pointerEvents: this.state.activeSlide === 0 ? "none" : "auto",
						transition: "0.5s",
						opacity: this.state.activeSlide === 0 ? "0.2" : "1"
					}}
					className="leftArrow" 
					onClick={this.previous
				}>
					<img 
						src={activeLeftArrow} 
						alt=""
					/>
				</div>
				<div
					style={{
						pointerEvents: this.state.activeSlide === 2 ? "none" : "auto",
						transition: "0.5s",
						opacity: this.state.activeSlide === 2 ? "0.2" : "1"
					}} 
					className="rightArrow" 
					onClick={this.next}
				>
					<img 
						src={activeRightArrow} 
						alt=""
					/>
				</div>
			</>
		);
	}
}

export default ServicesCarousel;