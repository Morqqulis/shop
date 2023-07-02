import Link from 'next/link';
import Slider from './components/Slider/Slider';
import 'aos/dist/aos.css';


export default function Home() {
	return (
		<div data-aos="fade-right">
			<Link href={'/products'}>Продукты</Link>
		</div>
	);
}
