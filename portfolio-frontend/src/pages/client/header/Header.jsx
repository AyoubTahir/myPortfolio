import { useState, useEffect } from 'react';
import { logo } from '../../../assets';
import './header.scss'

const Header = () => {

    const [scroll, setScroll] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });
    }, []);

  return (
    <header className={scroll ? "sticky" : ""}>
		<a href="#home" className="logo"><img src={logo} alt='logo' /></a>
		<div className="bx bx-menu" id="menu-icon"></div>

		<ul className="navlist">
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#portfolio">Portfolio</a></li>
			<li><a href="#service">Service</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
		<a href="#home" className="top-btn">Download CV</a>
	</header>
  )
}

export default Header