// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
	return (
		<div>
			<div
				className="block md:flex md:justify-evenly text-center 
							-ml-20 md:ml-0 mt-12 md:mt-28 space-x-3"
			>
				{/* Logo */}
				<div className="flex-1 font-bold text-2xl cursor-pointer">
					<span className="ml-10 md:-ml-40">
						<span className="bg-[#39DB4A] bg-origin-border rounded-md px-1.5 text-white">
							S
						</span>
						ushi
					</span>
					<div className="flex text-sm font-normal w-40 mt-2 md:mt-4 ml-44 md:ml-32">
						<span>
							Savor the artistry where every dish is a culinary masterpiece
						</span>
					</div>
				</div>

				<div className="flex flex-row justify-center md:justify-between gap-4 mt-4 md:mt-0 md:gap-20">
					{/* Useful links */}
					<div className="flex-1 ml-12 md:ml-0 md:w-64">
						<span className="text-md font-bold">Useful Links</span>
						<ul className="mt-2 text-sm space-y-2">
							<li>
								<a href="/">About Us</a>
							</li>
							<li>
								<a href="/">Events</a>
							</li>
							<li>
								<a href="/">Blogs</a>
							</li>
							<li>
								<a href="/">FAQ</a>
							</li>
						</ul>
					</div>
					{/* Main Menu */}
					<div className="md:flex-1 md:text-start md:ml-3">
						<span className="text-md font-bold">Main Menu</span>
						<ul className="mt-2 text-sm space-y-2 ">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Offers</a>
							</li>
							<li>
								<a href="/">Menu</a>
							</li>
							<li>
								<a href="/">Reservation</a>
							</li>
						</ul>
					</div>
					{/* Contact */}
					<div className="md:flex-1 md:text-start md:mr-48 ">
						<span className="text-md font-bold">Contact Us</span>
						<ul className="mt-2 text-sm space-y-2">
							<li>example@gmail.com</li>
							<li>+1 254 543 222</li>
							<li>Social media</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Footer icons and copyright */}
			<div className="flex mt-10 md:mt-20 ml-28 md:ml-32 mb-4 md:mb-8 gap-4">
				<div className="flex justify-center items-center bg-[#39DB4A] rounded-full w-8 h-8">
					<FiFacebook className=" w-5 h-5 text-[#ffff]" />
				</div>
				<div className="flex justify-center items-center bg-[#d6fcda] rounded-full w-8 h-8">
					<FaInstagram className=" w-5 h-5 text-[#484848]" />
				</div>
				<div className="flex justify-center items-center bg-[#d6fcda] rounded-full w-8 h-8">
					<CiTwitter className=" w-5 h-5 text-[#484848]" />
				</div>
				<div className="flex justify-center items-center bg-[#d6fcda] rounded-full w-8 h-8">
					<AiOutlineYoutube className=" w-5 h-5 text-[#484848]" />
				</div>

				<div className="text-sm font-normal -ml-[16rem] md:ml-40 mt-12 md:mt-1">
					<span>Copyright &copy; 2024 Madev | All rights reserved</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
