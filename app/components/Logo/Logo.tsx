import { useEffect, useState } from 'react';
import Link from 'next/link';
import { mangoFont } from '@/app/layout';

export default function Logo() {
	const [hovered, setHovered] = useState(false);
	const [isDelayed, setIsDelayed] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDelayed(true);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	const isActive = isDelayed ? 'is-active' : '';

	const handleHover = () => {
		document.querySelectorAll('.logo>svg>text').forEach((text) => {
			text.classList.remove('is-active');
			setTimeout(() => {
				text.classList.add('is-active');
			}, 0);
		});
	};

	return (
		<Link className={`logo ${mangoFont.className}`} href={'/'} onMouseEnter={handleHover} data-aos="fade-down" data-aos-duration={1200} data-aos-delay={500}>
			<svg className="text" viewBox="0 0 850 125">
				<text fill="none" stroke="gold" transform="translate(3 102)" strokeWidth="3" fontSize="102" fontWeight="800" letterSpacing="0.1em" className={`${isActive}`}>
					<tspan>JASMIN</tspan>
				</text>
			</svg>
			<svg className="text" viewBox="0 0 850 125">
				<text fill="none" stroke="gold" transform="translate(3 102)" strokeWidth="3" fontSize="102" fontWeight="400" letterSpacing="0.1em" className={`${isActive} ${mangoFont.className}`}>
					<tspan>BEAUTY SHOP</tspan>
				</text>
			</svg>
		</Link>
	);
}
