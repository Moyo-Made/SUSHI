// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";

function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex items-center justify-evenly p-4">
			{/* Logo */}
			<h1 className="text-xl font-bold">
				<span className="bg-[#39DB4A] bg-origin-border rounded-md px-1.5 text-white">
					S
				</span>
				ushi
			</h1>

			{/* Navigation Links */}
			<div className=" flex space-x-3">
				<a href="" className="p-4">
					Home
				</a>
				<a href="" className="p-4">
					Menu
				</a>
				<a href="" className="p-4">
					About Us
				</a>
				<a href="" className="p-4">
					Services
				</a>
				<a href="" className="p-4">
					Offers
				</a>
			</div>

			{/* Search, cart, contact */}
			<div className="flex space-x-6">
				<div className="text-2xl">
					<FiSearch />
				</div>
				<div className="relative">
					<div className="text-2xl" onClick={() => setOpen(!open)}>
						<RiShoppingBagLine />
						<div className="w-3 h-3 bg-[#39DB4A] rounded-full flex items-center justify-center absolute top-0 right-0 text-white">
							<span className="text-sm">8</span>
						</div>
					</div>
				</div>

				<div
					className="bg-[#39DB4A]  text-white rounded-full flex items-center justify-center 
								px-4 py-2 cursor-pointer shadow-xl transform transition-transform hover:scale-110"
				>
					<div className="mr-2">
						<LuPhoneCall />
					</div>
					<div className="font-bold ">
						<h4>Contact</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
