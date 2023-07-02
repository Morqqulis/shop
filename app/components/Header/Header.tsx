'use client';
import AOS from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import shopingImg from '@img/globals/icons/card.svg';
import Logo from '../Logo/Logo';

export default function Header() {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseHover = () => {
		setIsHovered(!isHovered);
	};

	useEffect(() => {
		// You can also pass an optional settings object
		// below listed default settings
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
			initClassName: 'aos-init', // class applied after initialization
			animatedClassName: 'aos-animate', // class applied on animation
			useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 600, // values from 0 to 3000, with step 50ms
			easing: 'ease-out', // default easing for AOS animations
			once: true, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
		});
	}, []);

	return (
		<header className="header" data-aos="fade-down">
			<div className="header__container">
				<div className="header__top">
					<Logo />

					<div className="header__search" data-aos="fade-left" data-aos-duration={800} data-aos-delay={500}>
						<input className="header__search-input" type="text" placeholder="Поиск..." />
						<button className="header__search-btn" type="button">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
							</svg>
						</button>
					</div>
					<nav className="header__nav">
						<ul className="header__menu" data-aos="fade-right" data-aos-duration={800} data-aos-delay={500}>
							<li className="header__menu-item">
								<button className="header__menu-btn btn" type="button">
									Sign in
								</button>
							</li>
							<li className="header__menu-item">
								<button className="header__menu-btn btn" type="button">
									Log in
								</button>
							</li>
						</ul>
					</nav>
					<button className="header__shoping" type="button">
						<span className="header__shoping-count">{}</span>
						<Image src={shopingImg} alt="shoping cart" />
					</button>
				</div>
			</div>
		</header>
	);
}
