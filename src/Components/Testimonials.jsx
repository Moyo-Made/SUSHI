// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import TestImg from "../assets/Group 36.png";
import Testimony1 from "../assets/Mask group (2).png";
import Testimony2 from "../assets/Mask group (3).png";
import Testimony3 from "../assets/Mask group (1).png";
import { FaStar } from "react-icons/fa";
import { useScroll, motion, useTransform } from "framer-motion";

const Testimonials = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className=" flex flex-col md:flex-row justify-evenly items-center mt-14 md:mt-24"
		>
			{/* Left Side */}
			<div className="flex-1 -ml-4 md:ml-40 w-[280px] h-[280px] md:w-[300px] md:h-[300px]">
				<img src={TestImg} alt="Testimonial Image" width={350} height={350} />
				<div className="flex justify-end">
					<span
						className="bg-[#f3f3f3] shadow-2xl -mt-2 md:-mt-5 py-1 px-4 rounded-tr-full
									rounded-tl-none rounded-bl-full rounded-br-full -mr-6 md:mr-40 font-normal"
					>
						Our best chef 😀
					</span>
				</div>
			</div>

			{/* Right Side */}
			<div className="block mr-6 md:mr-48 mt-10">
				<span className="text-red-500 text-sm font-bold">TESTIMONIALS</span>
				<div className="block mt-2 md:mt-4 text-2xl md:text-4xl font-bold">
					<span>
						What Our Customers <br />
						Say About Us
					</span>
				</div>
				<div className="block w-64 md:w-[30rem] mt-4 md:mt-8 font-normal">
					<span>
						&quot;I had the pleasure of dining at Foodi last night, and I&apos;m
						still raving about the experience! The attention to detail in
						presentation and service was impeccable&quot;
					</span>
				</div>
				<div className="flex justify-between">
					<div className="flex mt-4 mr-8 md:mr-auto md:mt-8 w-10 h-10">
						<img src={Testimony1} alt="" className="-z-1" />
						<img src={Testimony2} alt="" className=" -z-1 -ml-3" />
						<img src={Testimony3} alt="" className="-ml-3" />
					</div>
					<div className="mt-2 md:mt-6 -mr-6 md:mr-40">
						<div className="flex font-bold">
							<span>Customer Feedback</span>
						</div>
						<div className="flex">
							<div className="flex mt-1">
								<span className="text-yellow-500 flex ">
									<FaStar />
								</span>
							</div>
							<div>
								<span className="font-semibold">4.9 </span>
								<span className="text-gray-500"> (18.6k Reviews)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Testimonials;
