// eslint-disable-next-line no-unused-vars
import React from "react";
import playButton from "../assets/Polygon 1.png";
import sushiImage from "../assets/MAIN SUSHI IMAGE.png";

function Hero() {
	return (
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

			<div className="flex-1 flex flex-col items-center z-50">
				<img
					src={sushiImage}
					alt="Sushi Image"
					width={500}
					height={500}
					className="mt-[-12px]"
				/>
				<div className="flex flex-row items-center space-x-7 ">
					<div className="bg-[#f9f9f9fd]  w-40 h-14 ml-20  mt-[-200px] shadow-2xl rounded-xl -z-10">
						<h4>Sushi</h4>
					</div>
					<div className=" bg-[#fdfafaa1]  mt-[-200px] w-40 h-14 shadow-2xl rounded-xl -z-10">
						<h4>Sushi</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
