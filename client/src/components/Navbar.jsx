import React, { useState } from "react";
import { ChevronDown, ChevronUp, CircleUserRound, Menu, X } from "lucide-react"; // Hamburger menu and close icons
import { Link } from "react-router-dom"; // For navigation
import logo from "../assets/logo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [profile, setProfile] = useState(false);

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link
							to="/"
							className="flex gap-2 items-center text-2xl font-grotesk font-bold text-secondary2 hover:text-primary"
						>
							<img
								className="w-16 rounded-full"
								src={logo}
								alt="Logo - A bulb with codes to represent Innovation related to coding"
							/>
							Innovatrix
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-8 items-center">
						<Link
							to="/about"
							className="text-secondary2 hover:text-primary font-medium font-grotesk"
						>
							About
						</Link>
						<Link
							to="/organizers"
							className="text-secondary2 hover:text-primary font-medium font-grotesk"
						>
							For Organizers
						</Link>
						<Link
							to="/builders"
							className="text-secondary2 hover:text-primary font-medium font-grotesk"
						>
							For Builders
						</Link>
						<Link
							to="/kanban"
							className="text-secondary2 hover:text-primary font-medium font-grotesk"
						>
							Kanban
						</Link>
						<button
							onClick={() => setProfile(!profile)}
							className="relative flex flex-col justify-center items-center text-secondary2"
						>
							<div className="flex gap-2 items-center  hover:text-primary font-medium font-grotesk">
								<CircleUserRound />
								Sign In
								{profile ? <ChevronUp /> : <ChevronDown />}
							</div>
							{/* Profule Drawer */}
							{profile && (
								<div className="absolute top-full mt-2 bg-white w-44 p-4 flex flex-col gap-3 font-grotesk rounded shadow-md z-50">
									<button className="hover:text-primary">Profile</button>
									<button className="hover:text-primary">Sign Out</button>
								</div>
							)}
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-secondary2 hover:text-primary focus:outline-none"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-md">
					<Link
						to="/about"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						About
					</Link>
					<Link
						to="/organizers"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						For Organizers
					</Link>
					<Link
						to="/builders"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						For Builders
					</Link>
					<Link
						to="/kanban"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						Kanban
					</Link>
					<Link
						to="/community"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						Join Community
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
