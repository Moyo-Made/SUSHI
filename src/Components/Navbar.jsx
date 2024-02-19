// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
	const location = useLocation();
	const [open, setOpen] = useState(false);

	const Links = [
		{ name: "Home", link: "/" },
		{ name: "Menu", link: "/", icon: <RiArrowDropDownLine /> },
		{ name: "About Us", link: "/" },
		{ name: "Services", link: "/", icon: <RiArrowDropDownLine /> },
		{ name: "Offers", link: "/" },
	];
	return (
		<div className="shadow-md w-full fixed top-0 left-0 z-50">
			<div className="md:flex items-center justify-evenly bg-white py-4 md:px-12 px-10">
				{/* Logo */}
				<div className="font-bold text-2xl cursor-pointer flex items-center">
					<span>
						<span className="bg-[#39DB4A] bg-origin-border rounded-md px-1.5 text-white">
							S
						</span>
						ushi
					</span>
				</div>

				{/* Menu Icon for Small Screens */}
				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-0 mr-10 top-4 cursor-pointer md:hidden"
				>
					{open ? <IoCloseSharp /> : <IoMenu />}
				</div>
				<ul
					className={`md:flex font-semibold md:items-center md:pb-0 pb-3 absolute md:static bg-white
								md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
								duration-500 ease-in ${
									open ? "top-20 opacity-100" : "top-[-490px]"
								} md:opacity-100`}
				>
					{Links.map((Link) => (
						<li key={Link.name} className="md:ml-8 text-md md:my-0 my-7">
							<a
								href={Link.link}
								className={`text-gray-800 flex ${
									location.pathname.startsWith(Link.link)
										? "text-[#39DB4A]"
										: ""
								}`}
							>
								{Link.name}
								<span className="text-[#39DB4A] text-2xl mt-[2px]">
									{Link.icon}
								</span>
							</a>
						</li>
					))}
				</ul>

				{/* Search, cart, contact */}
				<div className="flex mt-4 md:mt-0 space-x-6 ">
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

					<div className="button">
						<div className="mr-2">
							<LuPhoneCall />
						</div>
						<div className="font-semibold">
							<h4>Contact</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
