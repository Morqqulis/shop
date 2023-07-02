import 'aos/dist/aos.css';
import '@css/globals.scss';

import localFont from 'next/font/local';
import Header from '@com/Header/Header';
import Image from 'next/image';
import bg from '@img/globals/bgv.jpg';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';

export const archaneFont = localFont({ src: '../public/fonts/Archane.woff2', display: 'swap' });
export const mangoFont = localFont({ src: '../public/fonts/BlackMangoVariableGX.ttf', display: 'swap' });


export const metadata = {
	title: 'My Shop',
	description: 'Beauty Shop',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={archaneFont.className}>
				<div className="bg">
					<Image src={bg} alt="bg" fill={true} style={{ objectFit: 'cover' }} />
				</div>
				<div className="wrapper">
					<Header />
					<main className="main">
						<Aside />
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
