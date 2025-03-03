import React, { Component } from "react";
import DarkModeToggle from "../../themes/DarkMode/DarkModeToggle";
// import BlackLogo from "../../static/images/logos/kernelcon_logo.svg";
import KillerLogo from "../../static/images/logos/social2.png";
import KillerLogoWhite from "../../static/images/logos/k25-white.png";
import "./NavBar.scss";

export default class NavBar extends Component {
	static displayName = "NavBar";

	render() {
		return (
			<div className="navbar">
				<div className="container">
					<a href="/">
						<img
							src={KillerLogoWhite}
							className="navbar-logo-k25 light-mode-show dark-mode-hide"
							height="30"
							alt="kernelcon logo"
						/>
						<img
							src={KillerLogo}
							className="navbar-logo-k25 dark-mode-show light-mode-hide"
							height="30"
							alt="kernelcon logo"
						/>
						
						<p className="nav-dates">Training: Apr 1-2</p>
						<p className="second-nav-dates">Conference: Apr 3-4</p>
					</a>
				</div>
				<div className="toggle-group">
					<DarkModeToggle />
				</div>
			</div>
		);
	}
}
