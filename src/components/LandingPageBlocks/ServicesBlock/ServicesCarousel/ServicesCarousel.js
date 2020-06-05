import React, { Component } from "react";
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../../../node_modules/slick-carousel/slick/slick.css';
import './ServicesCarouselFix.css';
import Slider from "react-slick";

class ServicesCarousel extends Component {
	render() {

		var settings = {
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: true,
			infinite: false,
			focusOnSelect: true,
			variableWidth: true,
			arrows: false,
		};

		return (
			<Slider {...settings}>
				{this.props.children}
			</Slider>
		);
	}
}

export default ServicesCarousel;