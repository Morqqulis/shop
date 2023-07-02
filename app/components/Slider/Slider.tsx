'use client';
//----------------------------------------------
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
//----------------------------------------------
interface ISlider {
	children?: React.ReactNode;
	slides: number;
}

export default function Slider({ slides, children }: ISlider) {
	const numberArray = Array.from({ length: slides }, (_, index) => index + 1);

	return (
		<>
			<Swiper
				modules={[EffectCube]}
				slidesPerView={1}
				loop={true}
				className="mySwiper"
				effect={'cube'}
				cubeEffect={{
					shadow: false,
				}}>
				{numberArray.map((num) => (
					<SwiperSlide key={num}>{children}</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
//----------------------------------------------
