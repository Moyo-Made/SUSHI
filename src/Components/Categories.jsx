// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import MainDish from "../assets/main-dish.png";
import BreakFast from "../assets/breakfast.png";
import SushiCombo from "../assets/sushi-combo.png";
import BrowseAll from "../assets/browse-all.png";
import { useScroll, motion, useTransform } from "framer-motion";

const Categories = () => {
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
			className="mx-auto text-center mt-20"
		>
			<span className="block text-red-500 text-sm font-semibold">
				CUSTOMER FAVOURITES
			</span>
			<span className="block text-3xl font-bold">Popular Categories</span>

			<div className="ml-28 md:flex justify-center items-center gap-20">
				{/* Main Dish */}
				<div className=" bg-[#ffff] text-center shadow-2xl rounded-2xl w-40 h-40 mt-8 pt-6">
					<div className="bg-[#39DB4A] rounded-full mx-auto text-center w-16 h-16 flex justify-center items-center">
						<img src={MainDish} alt="Main Dish" />
					</div>
					<div className="mt-2">
						<span className="font-semibold text-sm">Main Dish</span>
					</div>
					<div className="w-full ml-2">
						<span className="font-semibold text-sm text-gray-400 mr-[0.6rem]">
							(86 dishes)
						</span>
					</div>
				</div>

				{/* BreakFast */}
				<div className=" bg-[#ffff] text-center shadow-2xl rounded-2xl w-40 h-40 mt-8 pt-6">
					<div className="bg-[#39DB4A] rounded-full mx-auto text-center w-16 h-16 flex justify-center items-center">
						<img src={BreakFast} alt="BreakFast" />
					</div>
					<div className="mt-2">
						<span className="font-semibold text-sm">Break Fast</span>
					</div>
					<div className="w-full ml-2">
						<span className="font-semibold text-sm text-gray-400 mr-[0.6rem]">
							(12 break fast)
						</span>
					</div>
				</div>

				{/* Sushi Combo */}
				<div className="bg-[#ffff] text-center shadow-2xl rounded-2xl w-40 h-40 mt-8 pt-6">
					<div className="bg-[#39DB4A] rounded-full mx-auto text-center w-16 h-16 flex justify-center items-center">
						<img src={SushiCombo} alt="SushiCombo" />
					</div>
					<div className="mt-2">
						<span className="font-semibold text-sm">Sushi Combo</span>
					</div>
					<div className="w-full ml-2">
						<span className="font-semibold text-sm text-gray-400 mr-[0.6rem]">
							(Combo of 6)
						</span>
					</div>
				</div>

				{/* Browse All */}
				<div className="bg-[#ffff] text-center shadow-2xl rounded-2xl w-40 h-40 mt-8 pt-6">
					<div className="bg-[#39DB4A] rounded-full mx-auto text-center w-16 h-16 flex justify-center items-center">
						<img src={BrowseAll} alt="Browse All" />
					</div>
					<div className="mt-2">
						<span className="font-semibold text-sm">Browse All</span>
					</div>
					<div className="w-full ml-2">
						<span className="font-semibold text-sm text-gray-400 mr-[0.6rem]">
							(255 items)
						</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Categories;
