import React from 'react';
import "./Header.css"
import $ from "jquery"
const Header = () => {
	window.onload=function(){
		$('.humbarger').click(function(event){
			$('.menu-list').slideToggle(500);
			event.preventDefault();
			
			$('.menu-list li a').click(function(event) {
				if ($(window).width() < 768) {
				  $('.menu-list').slideUp(500);
				  event.preventDefault(); 
				}
			  });
			});
			};
  return(
	<header>
		<nav className="navigation">

			{/* <!-- Logo --> */}
			<div className="logo">
				<h1>LOGO</h1>
			</div>
			
			{/* <!-- Navigation --> */}
			<ul className="menu-list">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#portfolio">Project</a></li>
				<li><a href="#">Contact</a></li>
			</ul>

			<div className="humbarger">
				<div className="bar"></div>
				<div className="bar2 bar"></div>
				<div className="bar"></div>
			</div>
		</nav>
	</header>

  )
};

export default Header;
