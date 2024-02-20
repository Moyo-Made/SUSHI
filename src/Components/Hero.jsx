// eslint-disable-next-line no-unused-vars
import React from "react";
import playButton from "../assets/Polygon 1.png";
import sushiImage from "../assets/MAIN SUSHI IMAGE.png";
import Makizushi from "../assets/main-dish.png";
import caliRoll from "../assets/browse-all.png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { motion } from "framer-motion";

function Hero() {
	return (
		//LEFT SIDE
		<div className="flex flex-col md:flex-row justify-center items-center">
			<div className="flex text-center md:flex-1 justify-center mt-36 md:ml-32 md:mt-10 md:text-left">
				<div className="">
					<h2 className="text-2xl md:text-4xl font-extrabold ">
						Sushi Bliss, Every <br />
						Roll a Flavorful
						<span className="text-[#39DB4A]"> Kiss</span>
					</h2>
					<p className="ml-14 md:-ml-0 w-[70%] md:w-auto text-center md:text-left mt-4 font-semibold">
						Masters of Maki: Elevate Your Taste Buds with Our Sushi <br />{" "}
						Creations, Where Tradition Meets Innovation!
					</p>
					<div className="ml-10 md:ml-0 mt-8 flex items-center space-x-4">
						<h4 className="button shadow shadow-sm-[#39DB4A] w-32 font-semibold">
							Order Now
						</h4>

						<h4 className="font-semibold mt-[-6px]">Watch Video</h4>
						<div
							className="bg-[#ffffff00] flex items-center justify-center ml-[-18px] mt-[-6px] 
										shadow-sm shadow-black w-10 h-10 rounded-full cursor-pointer hover:scale-110"
						>
							<img src={playButton} alt="Play button" className="w-3 h-3" />
						</div>
					</div>
				</div>
			</div>

			{/* RIGHT SIDE  */}
			<div className="justify-end mb-4 hidden sm:block lg:block xl:block">
				<div className="relative">
					<div
						className="bg-[#f3ebeb] text-red-500 font-semibold rounded-tl-full 
									rounded-tr-full rounded-bl-full rounded-br-none py-2 px-4 shadow-2xl
									md:-mr-24 md:-mt-16 z-1"
					>
						<span>Best sushi ever!</span>
					</div>
				</div>
			</div>
			<motion.div
				initial={{ x: "15rem", opacity: 1 }}
				animate={{ x: 0, opacity: 2 }}
				transition={{
					duration: 1.5,
					type: "ease-in",
				}}
				className="flex-1 mr-10 -mt-10 md:mt-14 md:mr-[14rem] items-center z-10 w-[300px]
							 md:w-[450px] h-[300px] md:h-[450px]"
			>
				<img
					src={sushiImage}
					alt="Sushi Image"
					width={450}
					height={450}
					className="flex justify-center"
				/>
				<div className="flex flex-col md:flex-row items-center space-x-7 w-[20rem] md:w-[30rem]">
					{/* Makizushi */}
					<div
						className="flex items-center space-x-3 bg-[#ffff] space-y-2 w-[14rem] md:w-[19rem] md:h-24 
									md:ml-8 -mt-[5rem] md:-mt-[8.5rem] shadow-2xl rounded-xl -z-10
									md:mb-auto mb-1"
					>
						<img
							width={50}
							height={50}
							src={Makizushi}
							alt="Makizushi"
							className="ml-5"
						/>
						<div className="flex-1">
							<h3 className="font-bold">Makizushi</h3>
							<div className="flex flex-row text-yellow-400">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaRegStar />
								<FaRegStar />
							</div>
							<h3 className="font-bold">
								<span className="text-red-500 font-medium">$</span> 18.00
							</h3>
						</div>
					</div>

					{/* CaliRoll */}
					<div
						className="flex items-center space-x-3 bg-[#ffff] space-y-2 w-[14rem] md:w-[19rem] md:h-24 
									md:mt-[-180px] md:mr-auto mr-10 shadow-2xl rounded-xl -z-10"
					>
						<img
							width={50}
							height={50}
							src={caliRoll}
							alt="Cali Roll"
							className="ml-5"
						/>
						<div className="flex-1">
							<h3 className="font-bold">California roll</h3>
							<div className="flex flex-row text-yellow-400">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaRegStar />
							</div>
							<h3 className="font-bold">
								<span className="text-red-500 font-medium">$</span> 23.00
							</h3>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Hero;
