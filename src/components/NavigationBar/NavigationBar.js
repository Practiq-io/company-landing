import React from 'react';
import './NavigationBar.css';
import logo from "../../image/logo.png";



const NavigationBar = () => {
    return (
        <nav className="Navigation-Panel">
            <div class="wrapper">
							<div class="nav_wrapper">
								<div class="logo">
									<img src={logo}></img>
								</div>

								<div className="navigation">
									<a href="#">What we do</a>
									<a href="#">How it works</a>
									<a href="#">About us</a>
									<a href="#">Get started</a>
									<span className="mobile_nav">

									</span>
								</div>
							</div>
						</div>

						
        </nav>
    )
}

export default NavigationBar;