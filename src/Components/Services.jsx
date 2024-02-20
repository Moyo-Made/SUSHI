// eslint-disable-next-line no-unused-vars
import React from "react";
import Catering from "../assets/Vector.png";
import FastDelivery from "../assets/fi-rr-time-fast.png";
import OnlineOrdering from "../assets/fi-rr-shopping-cart-check.png";
import GiftCard from "../assets/fi-rr-gift.png";

const Services = () => {
	return (
		<div className="md:flex flex-col md:mt-40 mt-20">
			{/* Left side */}
			<div className="flex-1 md:ml-40 ml-10">
				<div className="text-red-500 text-sm font-bold">
					<span>OUR STORY & SERVICES</span>
				</div>
				<div className="text-2xl md:text-4xl font-bold mt-4 w-72 md:w-[25rem]">
					<span>Our Culinary Journey And Services</span>
				</div>
				<div className="font-normal w-72 md:w-[22rem] mt-4">
					<span>
						Rooted in passion, we curate unforgettable dining experiences and
						offer exceptional services, blending culinary artistry with warm
						hospitality.
					</span>
				</div>
				<button className="button font-semibold mt-6 w-28">Explore</button>
			</div>

			{/* Right side */}
			<div
				className="flex flex-wrap gap-2 md:gap-8 text-center w-[25rem] 
							mt-8 md:-mt-72 ml-2 md:ml-[46rem]"
			>
				{/* Catering */}
				<div className="rounded-xl bg-[#ffff] shadow-2xl w-44 h-44">
					<div className="flex justify-center mt-6">
						<img src={Catering} alt="" width={32} height={32} />
					</div>
					<div className="mt-3 text-[#5FE26C] font-semibold">
						<span>CATERING</span>
					</div>
					<div className="ml-6 text-sm mt-2 w-32 text-[#90BD95]">
						<span>Delight your guests with our flavors and presentation</span>
					</div>
				</div>

				{/* Fast delivery */}
				<div className="rounded-xl bg-[#ffff] shadow-2xl w-44 h-44">
					<div className="flex justify-center mt-6">
						<img src={FastDelivery} alt="" width={32} height={32} />
					</div>
					<div className="mt-3 text-[#5FE26C] font-semibold">
						<span>FAST DELIVERY</span>
					</div>
					<div className="text-sm mt-2 w-38 text-[#90BD95]">
						<span>We deliver your order promptly to your door</span>
					</div>
				</div>

				{/* Online ordering */}
				<div className="rounded-xl bg-[#ffff] shadow-2xl w-44 h-44">
					<div className="flex justify-center mt-6">
						<img src={OnlineOrdering} alt="" width={32} height={32} />
					</div>
					<div className="mt-3 text-[#5FE26C] font-semibold">
						<span>ONLINE ORDERING</span>
					</div>
					<div className="ml-4 text-sm mt-2 w-36 text-[#90BD95]">
						<span>
							Explore menu & order with ease using our Online Ordering
						</span>
					</div>
				</div>

				{/* Gift cards */}
				<div className="rounded-xl bg-[#ffff] shadow-2xl w-44 h-44">
					<div className="flex justify-center mt-6">
						<img src={GiftCard} alt="" width={32} height={32} />
					</div>
					<div className="mt-3 text-[#5FE26C] font-semibold">
						<span>GIFT CARDS</span>
					</div>
					<div className="ml-4 text-sm mt-2 w-36 text-[#90BD95]">
						<span>
							Give the gift of exceptional dining with Foodi Gift Cards
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
