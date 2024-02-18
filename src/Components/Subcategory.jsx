// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../utils/common";
import data from "../utils/slider.json";

function Subcategory() {
	return (
		<div className="ml-40 mt-20">
			<span className="block text-red-500 text-sm font-semibold">
				SPECIAL DISHES
			</span>
			<span className="block mt-2 text-4xl font-bold w-[18rem]">
				Best Dishes From Our Menu
			</span>

			<Swiper {...sliderSettings}>
				<SliderButtons />
				{data.map((card, i) => (
					<SwiperSlide key={i}>
					
						<div>
						<img src={card.image} alt="Sushi Image" />
						</div>
							
							<span>
								{card.name}
							</span>
							<span>{card.desc}</span>
							<span>${card.price}</span>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Subcategory;

const SliderButtons = () => {
	const swiper = useSwiper();
	return (
		<div className="flex justify-end cursor-pointer">
			<div onClick={() => swiper.slidePrev()}>&lt;</div>
			<div onClick={() => swiper.slideNext()}>&gt;</div>
		</div>
	);
};
