// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../utils/common";
import data from "../utils/slider.json";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

function Subcategory() {
	return (
		<div className="ml-12 md:ml-40 mt-10 md:mt-20">
			<span className="block text-red-500 text-sm font-semibold">
				SPECIAL DISHES
			</span>
			<span className="block mt-2 text-3xl md:text-4xl font-bold w-[10rem] md:w-[18rem]">
				Best Dishes From Our Menu
			</span>

			<Swiper {...sliderSettings}>
				<SliderButtons />
				{data.map((card, i) => (
					<SwiperSlide key={i}>
						<div className="bg-[#ffff] mt-8 shadow-2xl rounded-2xl w-[15rem] h-[18rem] ">
							<div className="top-0 ml-[12.5rem] bg-[#39DB4A] rounded-tr-2xl rounded-bl-2xl w-10 h-10">
								<span className="text-md text-white flex justify-center items-center">
									<MdFavoriteBorder className="mt-3" />
								</span>
							</div>
							<div className="flex justify-center mt-2">
								<img src={card.image} alt="Sushi" width={150} height={150} />
							</div>
							<div className="ml-10">
								<div className="font-bold text-md -mt-2">
									<span>{card.name}</span>
								</div>
								<div className="text-sm mt-1">
									<span>{card.desc}</span>
								</div>
								<div className="flex mt-3">
									<span className="text-red-500 text-sm mt-[0.15rem]">$</span>
									<span className="font-semibold">{card.price}</span>
									<div className="flex ml-20 gap-1 mt-1">
										<span className="text-yellow-400">
											<FaStar />
										</span>
										<span className="text-sm -mt-[0.15rem]">4.9</span>
									</div>
								</div>
							</div>
						</div>
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
		<div
			className="flex justify-center text-2xl text-white  text-center 
						gap-3 mt-4 mb-4"
		>
			<button
				className="bg-[#d9e0f2e3] w-9 rounded-full"
				onClick={() => swiper.slidePrev()}
			> 
				&lt;
			</button>
			<button
				className="bg-[#39DB4A] w-9 rounded-full"
				onClick={() => swiper.slideNext()}
			>
				&gt;
			</button>
		</div>
	);
};
