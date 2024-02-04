// eslint-disable-next-line no-unused-vars
import React from "react";
import playButton from "../assets/Polygon 1.png";
import sushiImage from "../assets/MAIN SUSHI IMAGE.png";
import Makizushi from "../assets/_cc226cf5-2147-430e-b16c-84644636b1fe-removebg-preview 1.png";
import caliRoll from "../assets/_78d38fb4-559d-4cdb-822d-44ecdec0a7f8-removebg-preview 1.png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

function Hero() {
	return (
		// Left Side
		<div className="flex">
			<div className="flex-1 flex justify-center mt-20">
				<div className="ml-34">
					<h2 className="text-4xl font-extrabold">
						Sushi Bliss, Every <br />
						Roll a Flavorful
						<span className="text-[#39DB4A]"> Kiss</span>
					</h2>
					<p className="mt-10 font-semibold">
						Masters of Maki: Elevate Your Taste Buds with Our Sushi <br />{" "}
						Creations, Where Tradition Meets Innovation!
					</p>
					<div className="mt-8 flex items-center space-x-4">
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

			{/* Right Side */}
			<div className="flex-1 flex flex-col items-center z-50">
				<img
					src={sushiImage}
					alt="Sushi Image"
					width={450}
					height={4500}
					className="mt-[-20px] mr-24"
				/>
				<div className="flex flex-row items-center space-x-7 mr-24">
					{/* Makizushi */}
					<div className="flex items-center space-x-3 bg-[#f9f9f9fd] space-y-2 w-52 h-24 ml-20  mt-[-180px] shadow-2xl rounded-xl -z-10">
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
								<span className="text-red-500 font-medium">$</span>18.00
							</h3>
						</div>
					</div>

					{/* CaliRoll */}
					<div className="flex items-center space-x-3 bg-[#f9f9f9fd] space-y-2 w-52 h-24 ml-20  mt-[-180px] shadow-2xl rounded-xl -z-10">
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
								<span className="text-red-500 font-medium">$</span>23.00
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
