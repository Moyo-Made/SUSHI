// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
// import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
	// const [openMenu, setOpenMenu] = useState(false);
	const [open, setOpen] = useState(false);
	const [activeLink, setActiveLink] = useState(null);

	const handleClick = (link) => {
		setActiveLink(link);
		// setOpenMenu(false);
	};
	const Links = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Services", link: "/services" },
		{ name: "Menu", link: "/Menu" },
	];
	return (
		<div className="shadow-md w-full fixed top-0 left-0">
			<div className="md:flex items-center justify-evenly bg-white py-4 md:px-12 px-10">
				<div className="font-bold text-2xl cursor-pointer flex items-center">
					<span>
						<span className="bg-[#39DB4A] bg-origin-border rounded-md px-1.5 text-white">
							S
						</span>
						ushi
					</span>
				</div>
				<ul className="md:flex md:items-center ">
					{Links.map((Link) => (
						<li key={Link.name} className="md:ml-8 text-lg">
							<a
								href={Link.link}
								className={`text-gray-800 hover:text-[#39DB4A] ${
									activeLink === Link.name ? "text-[#39DB4A]" : "text-red-500"
								}`}
								onClick={() => handleClick(Link.name)}
							>
								{Link.name}
							</a>
						</li>
					))}
				</ul>

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
			{/* Logo */}

			{/* Menu Icon for Small Screens */}
			{/* <div className="md:hidden">
				<button
					onClick={() => setOpenMenu(!openMenu)}
					className="text-2xl hover:bg-[#eae8e8] p-1 rounded-md focus:outline-none"
				>
					☰
				</button>
			</div> */}

			{/* Navigation Links */}
			{/* <div
				className={`flex md:flex  items-center space-x-3 font-bold  ${
					openMenu ? "flex-col md:flex-row" : "hidden"
				}`}
			>
				<a
					href=""
					className={`p-4 ${
						activeLink === 0 ? "text-[#39DB4A]" : "text-black"
					}`}
					onClick={() => handleClick(0)}
				>
					Home
				</a>
				<a
					href=""
					className={`p-4 flex items-center ${
						activeLink === 1 ? "text-[#39DB4A]" : "text-black"
					}`}
					onClick={() => handleClick(1)}
				>
					Menu <RiArrowDropDownLine className=" text-[#39DB4A] text-2xl" />
				</a>

				<a
					href=""
					className={`p-4 ${
						activeLink === 2 ? "text-[#39DB4A]" : "text-black"
					}`}
					onClick={() => handleClick(2)}
				>
					About Us
				</a>
				<a
					href=""
					className={`p-4 flex items-center ${
						activeLink === 3 ? "text-[#39DB4A]" : "text-black"
					}`}
					onClick={() => handleClick(3)}
				>
					Services <RiArrowDropDownLine className=" text-[#39DB4A] text-2xl" />
				</a>
				<a
					href=""
					className={`p-4 ${
						activeLink === 4 ? "text-[#39DB4A]" : "text-black"
					}`}
					onClick={() => handleClick(4)}
				>
					Offers
				</a>
			</div> */}

			{/* Search, cart, contact */}
			{/* <div className="flex mt-4 md:mt-0 space-x-6 ">
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
			</div> */}
		</div>
	);
}

export default Navbar;
