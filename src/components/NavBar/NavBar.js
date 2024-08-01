import React, { Component } from "react";
import DarkModeToggle from "../../themes/DarkMode/DarkModeToggle";
import BlackLogo from "../../static/images/logos/kernelcon_logo.svg";
import "./NavBar.scss";

export default class NavBar extends Component {
	static displayName = "NavBar";

	render() {
		return (
			<div className="navbar">
				<div className="container">
					<a href="/">
						<img
							src={BlackLogo}
							className="navbar-logo"
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
